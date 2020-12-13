var tablesByDate = {}

function tablesForDay(day) {
    if(!tablesByDate.hasOwnProperty(day)) {
        tablesByDate[day] = defaultEmptyTables();
    }

    return tablesByDate[day];
}

function initReservations(today) {
    // default is "free/available"
    let infos = {
        "1-1": {
            reservedBy: "snoop",
        },
        "2-1": {
            reservedBy: "kim",
        },
        "3-1": {
            reservedBy: "tintin",
        },
        "3-2": {
            reservedBy: "struppi",
        },
        "3-3": {
            unavailable: true,
        },
        "4-2": {
            reservedBy: "bruce",
        },
        "4-3": {
            reservedBy: "me",
        },
    };
    $.each(infos, (tableId, info) => {
        tablesForDay(today)[tableId] = info;
    });
}

function defaultEmptyTables() {
    return {
        "1-1": {},
        "1-2": {},
        "1-3": {},
        "2-1": {},
        "2-2": {},
        "2-3": {},
        "3-1": {},
        "3-2": {},
        "3-3": {},
        "4-1": {},
        "4-2": {},
        "4-3": {},
    }
}

function renderDay(day) {
    console.debug("rendering day", day);

    $(".desk").each((i, element) => {
        let classes = $(element).attr("class").split(/\s+/);

        $.each(classes, (i, className) => {
            if(className.startsWith("reserved-by") || className.startsWith("unavailable")) {
                $(element).removeClass(className);
                $(element).addClass("free");
            }
        });
    });

    $.each(tablesForDay(day), (tableId, info) => {
        if(info.unavailable) {
            console.debug(tableId + " unavailable");

            $("#table-" + tableId).removeClass("free")
                                  .addClass("unavailable");
        } else if(info.reservedBy) {
            console.debug(tableId + " reserved by " + info.reservedBy);

            $("#table-" + tableId).removeClass("free")
                                  .addClass("reserved-by-" + info.reservedBy);
        } else {
            //console.error("Unknown table info: " + JSON.stringify(info))
        }
    });
}

$(document).ready(() => {
    $("#datepicker").datepicker({
        onSelect: function(dateText) {
            console.debug("datepicker selected", dateText);
            renderDay(getSelectedDateString());
        }
    }).datepicker("setDate", new Date());

    let today = getSelectedDateString();
    initReservations(today);
    renderDay(today);

    $(".desk").click((event) => {
        let desk = $(event.target);
        let deskId = desk.attr("id").replace("table-", "");
        let day = getSelectedDateString();
        console.debug("clicking desk id", deskId)
        let info = tablesForDay(day)[deskId];
        console.debug("Info", info);

        if(info.reservedBy === "me") {
            tablesForDay(day)[deskId] = {}
        } else if(!info.unavailable && !isReservedByAnyone(desk)) {
            tablesForDay(day)[deskId] = {
                reservedBy: "me",
            }
        }

        console.debug("Number of days:", Object.keys(tablesByDate).length);
        console.debug("Date string", day);
        renderDay(day);
    });
});

function isReservedByAnyone(deskElement) {
    return $(deskElement).attr("class").includes("reserved-by");
}

function getSelectedDateString() {
    return $("#datepicker").val();
}
