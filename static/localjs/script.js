$('document').ready(

    // Style dropdown animation for all Menus with hmenu classes. 
    // Assumes that the children relationships are structured using the default html formatting provided in index
    function () {
        $("[class^='hmenu']").children("div").hover(function () {
            $(this).children("div").slideToggle(250)
        });

        // Styles simple image toggle option. Any item with class of toggle should be placed 
        // immediately following the div you wish to collapse.
        $("[class^='toggle']").click(function () {
            $(this).prev("div").slideToggle(250);
            $(this).toggleClass('rotate180');

        });

        var current_page = 1;
        var objCnt = 3;
        var objPerPg = 5;

        populatePageNums(getPageNums(objCnt, objPerPg));

        $("#pager").on('click', "button", function () {
            current_page = $(this).attr('value');
            populatePageNums(getPageNums(objCnt, objPerPg));

        });

        function populatePageNums(arr) {
            var pageNums = "";
            var leftVal = (current_page == 1) ? 1 : current_page - 1;
            console.log(arr.length);
            console.log(leftVal)
            var rightVal = (leftVal == (Math.floor(objCnt / objPerPg))) ? (Math.floor(objCnt / objPerPg) + 1) : ((current_page == 1) ? leftVal + 1 : leftVal + 2);
            console.log(rightVal)
            for (var i = 0; i < arr.length; i++) {
                if (i == 0) {
                    pageNums += '<button type = "button" value="' + leftVal + '">' + "<<<" + '</button>' +
                    '<button type = "button" value="' + 1 + '">' + "1.." + '</button>'
                } else if (i == arr.length - 1) {
                    pageNums += '<button type = "button" value="' + (Math.floor(objCnt / objPerPg)) + '">' + ".." + (Math.floor(objCnt / objPerPg)) + '</button>'
                } else {
                    pageNums += '<button type = "button" value="' + arr[i] + '">' + arr[i] + '</button>'
                }
            pageNums += '<button type = "button" value="' + rightVal + '">' + ">>>" + '</button>'
                
            /*    pageNums += ((i == 0) ? '<button type = "button" value="' + leftVal + '">' + "<<<" + '</button>' +
                    '<button type = "button" value="' + 1 + '">' + "1.." + '</button>' :
                    ((i == arr.length - 1) ? '<button type = "button" value="' + (Math.floor(objCnt / objPerPg) + 1) + '">' + ".." + (Math.floor(objCnt / objPerPg) + 1) + '</button>'
                        + '<button type = "button" value="' + rightVal + '">' + ">>>" + '</button>'
                        : '<button type = "button" value="' + arr[i] + '">' + arr[i] + '</button>'));*/
            }
            document.getElementById("pager").innerHTML = pageNums;
            $("button[value=" + current_page + "]").toggleClass("current");
        };
        function getPageNums(objCount, objPerPage) {
            
            var pageCount = (Math.floor(objCount / objPerPage)) == 0 ? 1 : Math.floor(objCount / objPerPage) ;
            var pager = (pageCount < 7) ? pageCount : 7;
            var displayed_pages = [];
            for (var i = 1; i <= pager; i++)
                if (current_page <= 3 && current_page > 0) {
                    console.log("Executed if1")
                    if (i == 1) {
                        displayed_pages.push(pageCount);
                        console.log("push i " + i)
                    } else {
                        displayed_pages.push(i);
                        console.log("i is " + i)
                    }
                } else if (current_page >= pageCount - 3) {
                    console.log("Executed if2")
                    if (i == 1) {
                        displayed_pages.push(1);
                    } else {
                        displayed_pages.push(pageCount - pager + i);
                    }
                } else if (current_page > 3 && current_page < pageCount - 3) {
                    console.log("Executed if3")
                    if (i == 1) {
                        displayed_pages.push(1)
                    }
                    else if (i == pager) {
                        displayed_pages.push(pageCount);
                    } else {
                        displayed_pages.push(current_page - 3 + i);
                    }
                }
            console.log(displayed_pages)
            return displayed_pages;
        };


    });