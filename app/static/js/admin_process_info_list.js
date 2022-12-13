function process_student_info() {
    var ajaxObj = new XMLHttpRequest();
    ajaxObj.open('get', '/admin/student/select');
    ajaxObj.send();
    ajaxObj.onreadystatechange = function () {
        if (ajaxObj.readyState == 4 && ajaxObj.status == 200) {
            console.log('数据返回成功');
            console.log(ajaxObj.responseText);
            var last=ajaxObj.responseText; //将JSON对象转化为JSON字符
            var obj = JSON.parse(last);
            var students = obj.students;

            var tablecontainer = document.getElementById("tablecontainer");
            while(tablecontainer.hasChildNodes()) {
                tablecontainer.removeChild(tablecontainer.firstChild);
            }

            var table=document.createElement("table");
            table.style.width = "1000px";
            table.style.borderCollapse = "collapse";
            table.border = 1;
            table.className = "table table-striped table-bordered table-hover";

            var thead=document.createElement("thead");

            var row = document.createElement('tr');
            var student_id = document.createElement('td');
            var student_name = document.createElement('td');
            var sex = document.createElement('td');
            var birth_year = document.createElement('td');
            var province = document.createElement('td');
            var major_name = document.createElement('td');
            var credits = document.createElement('td');
            var number_of_courses = document.createElement('td');
            var average_grade = document.createElement('td');
            var detail = document.createElement("td");

            student_id.innerHTML = "Student ID";
            student_name.innerHTML = "Student Name";
            sex.innerHTML = "Gender";
            birth_year.innerHTML = "Year of birth";
            province.innerHTML = "State";
            major_name.innerHTML = "Major No/Name";
            credits.innerHTML = "Credits";
            number_of_courses.innerHTML = "Number of Courses";
            average_grade.innerHTML = "Average Score";
            detail.innerHTML = "Details";

            row.appendChild(student_id);
            row.appendChild(student_name);
            row.appendChild(sex);
            row.appendChild(birth_year);
            row.appendChild(province);
            row.appendChild(major_name);
            row.appendChild(credits);
            row.appendChild(number_of_courses);
            row.appendChild(average_grade);
            row.appendChild(detail);

            thead.appendChild(row);
            table.appendChild(thead);

            var tbody = document.createElement('tbody');

            for (var i = 0; i < students.length; i++) {
                var row = document.createElement('tr');
                
                var student_id = document.createElement('td');
                var student_name = document.createElement('td');
                var sex = document.createElement('td');
                var birth_year = document.createElement('td');
                var province = document.createElement('td');
                var major_name = document.createElement('td');
                var credits = document.createElement('td');
                var number_of_courses = document.createElement('td');
                var average_grade = document.createElement('td');
                var detail = document.createElement('td');

                student_id.innerHTML = students[i].student_id;
                student_name.innerHTML = students[i].student_name;
                sex.innerHTML = students[i].sex;
                birth_year.innerHTML = students[i].birth_year;
                province.innerHTML = students[i].province;
                major_name.innerHTML = students[i].major_id + "/" + students[i].major_name;
                credits.innerHTML = students[i].credits;
                number_of_courses.innerHTML = students[i].number_of_courses;
                average_grade.innerHTML = students[i].average_grade;
                detail.innerHTML = "View";
                detail.style = "cursor:pointer";
                
                detail.setAttribute('row',i.toString);
                detail.setAttribute("student_id",students[i].student_id);
                
                detail.onclick = function() {
                    localStorage.setItem("student_id", this.getAttribute("student_id"));
                    localStorage.setItem("current_type", "change_student");
                    window.location.href = "Admin_Detail.html";
                }

                row.appendChild(student_id);
                row.appendChild(student_name);
                row.appendChild(sex);
                row.appendChild(birth_year);
                row.appendChild(province);
                row.appendChild(major_name);
                row.appendChild(credits);
                row.appendChild(number_of_courses);
                row.appendChild(average_grade);
                row.appendChild(detail);
                tbody.appendChild(row);
            }
            table.appendChild(tbody);
            tablecontainer.appendChild(table); 
        }
        else if(ajaxObj.readyState == 4 && ajaxObj.status == 404) {
            var last=ajaxObj.responseText; //将JSON对象转化为JSON字符
            var obj = JSON.parse(last);
            alert(obj.error);
        }
    }
}

function process_teacher_info() {
    var ajaxObj = new XMLHttpRequest();
    ajaxObj.open('get', '/admin/teacher/select');
    ajaxObj.send();
    ajaxObj.onreadystatechange = function () {
        if (ajaxObj.readyState == 4 && ajaxObj.status == 200) {
            console.log('数据返回成功');
            console.log(ajaxObj.responseText);
            var last=ajaxObj.responseText; //将JSON对象转化为JSON字符
            var obj = JSON.parse(last);
            var teachers = obj.teachers;

            var tablecontainer = document.getElementById("tablecontainer");
            while(tablecontainer.hasChildNodes()) {
                tablecontainer.removeChild(tablecontainer.firstChild);
            }

            var table=document.createElement("table");
            table.style.width = "790px";
            table.style.borderCollapse = "collapse";
            table.border = 1;
            table.className = "table table-striped table-bordered table-hover";

            var thead=document.createElement("thead");

            var row = document.createElement('tr');
            var teacher_id = document.createElement('td');
            var teacher_name = document.createElement('td');
            var sex = document.createElement('td');
            var birth_year = document.createElement('td');
            var number_of_courses = document.createElement('td');
            var detail = document.createElement("td");

            teacher_id.innerHTML = "Teacher ID";
            teacher_name.innerHTML = "Name";
            sex.innerHTML = "Gender";
            birth_year.innerHTML = "Year of Birth";
            number_of_courses.innerHTML = "Number of Courses";
            detail.innerHTML = "Details";

            row.appendChild(teacher_id);
            row.appendChild(teacher_name);
            row.appendChild(sex);
            row.appendChild(birth_year);
            row.appendChild(number_of_courses);
            row.appendChild(detail);

            thead.appendChild(row);
            table.appendChild(thead);

            var tbody = document.createElement('tbody');

            for (var i = 0; i < teachers.length; i++) {
                var row = document.createElement('tr');
                var teacher_id = document.createElement('td');
                var teacher_name = document.createElement('td');
                var sex = document.createElement('td');
                var birth_year = document.createElement('td');
                var number_of_courses = document.createElement('td');
                var detail = document.createElement("td");

                teacher_id.innerHTML = teachers[i].teacher_id;
                teacher_name.innerHTML = teachers[i].teacher_name;
                sex.innerHTML = teachers[i].sex;
                birth_year.innerHTML = teachers[i].birth_year;
                number_of_courses.innerHTML = teachers[i].number_of_courses;
                detail.innerHTML = "View";
                detail.style = "cursor:pointer";
                
                detail.setAttribute('row',i.toString);
                detail.setAttribute("teacher_id",teachers[i].teacher_id);
                
                detail.onclick = function() {
                    localStorage.setItem("teacher_id", this.getAttribute("teacher_id"));
                    localStorage.setItem("current_type", "change_teacher");
                    window.location.href = "Admin_Detail.html";
                }

                row.appendChild(teacher_id);
                row.appendChild(teacher_name);
                row.appendChild(sex);
                row.appendChild(birth_year);
                row.appendChild(number_of_courses);
                row.appendChild(detail);
                tbody.appendChild(row);
            }
            table.appendChild(tbody);
            tablecontainer.appendChild(table); 
        }
        else if(ajaxObj.readyState == 4 && ajaxObj.status == 404) {
            var last=ajaxObj.responseText; //将JSON对象转化为JSON字符
            var obj = JSON.parse(last);
            alert(obj.error);
        }
    }
}

function process_course_info() {
    var ajaxObj = new XMLHttpRequest();
    ajaxObj.open('get', '/admin/course/select');
    ajaxObj.send();
    ajaxObj.onreadystatechange = function () {
        if (ajaxObj.readyState == 4 && ajaxObj.status == 200) {
            console.log('数据返回成功');
            console.log(ajaxObj.responseText);
            var last=ajaxObj.responseText; //将JSON对象转化为JSON字符
            var obj = JSON.parse(last);
            var courses = obj.courses;

            var tablecontainer = document.getElementById("tablecontainer");
            while(tablecontainer.hasChildNodes()) {
                tablecontainer.removeChild(tablecontainer.firstChild);
            }

            var table=document.createElement("table");
            table.style.width = "790px";
            table.style.borderCollapse = "collapse";
            table.border = 1;
            table.className = "table table-striped table-bordered table-hover";

            var thead=document.createElement("thead");

            var row = document.createElement('tr');
            var course_id = document.createElement('td');
            var course_name = document.createElement('td');
            var year = document.createElement('td');
            var semester = document.createElement('td');
            var teacher_id = document.createElement('td');
            var credit = document.createElement('td');
            var number_of_students = document.createElement('td');
            var average_grade = document.createElement('td');
            var detail = document.createElement("td");

            course_id.innerHTML = "Course ID";
            course_name.innerHTML = "Course Name";
            year.innerHTML = "Acadeic Year";
            semester.innerHTML = "Semester";
            teacher_id.innerHTML = "Teacher No/Name";
            credit.innerHTML = "Credits";
            number_of_students.innerHTML = "Number of Students";
            average_grade.innerHTML = "Avaerage Grade";
            detail.innerHTML = "Details";

            row.appendChild(course_id);
            row.appendChild(course_name);
            row.appendChild(year);
            row.appendChild(semester);
            row.appendChild(teacher_id);
            row.appendChild(credit);
            row.appendChild(number_of_students);
            row.appendChild(average_grade);
            row.appendChild(detail);

            thead.appendChild(row);
            table.appendChild(thead);

            var tbody = document.createElement('tbody');

            for (var i = 0; i < courses.length; i++) {
                var row = document.createElement('tr');
                var course_id = document.createElement('td');
                var course_name = document.createElement('td');
                var year = document.createElement('td');
                var semester = document.createElement('td');
                var teacher_id = document.createElement('td');
                var credit = document.createElement('td');
                var number_of_students = document.createElement('td');
                var average_grade = document.createElement('td');
                var detail = document.createElement("td");

                course_id.innerHTML = courses[i].course_id;
                course_name.innerHTML = courses[i].course_name;
                year.innerHTML = courses[i].year;
                semester.innerHTML = courses[i].semester;
                teacher_id.innerHTML = courses[i].teacher_id + "/" + courses[i].teacher_name;
                credit.innerHTML = courses[i].credit;
                number_of_students.innerHTML = courses[i].number_of_students;
                average_grade.innerHTML = courses[i].average_grade;
                detail.innerHTML = "View";
                detail.style = "cursor:pointer";
                
                detail.setAttribute('row',i.toString);
                detail.setAttribute("course_id",courses[i].course_id);
                
                detail.onclick = function() {
                    localStorage.setItem("course_id", this.getAttribute("course_id"));
                    localStorage.setItem("current_type", "change_course");
                    window.location.href = "Admin_Detail.html";
                }
                
                row.appendChild(course_id);
                row.appendChild(course_name);
                row.appendChild(year);
                row.appendChild(semester);
                row.appendChild(teacher_id);
                row.appendChild(credit);
                row.appendChild(number_of_students);
                row.appendChild(average_grade);
                row.appendChild(detail);
                tbody.appendChild(row);
            }
            table.appendChild(tbody);
            tablecontainer.appendChild(table); 
        }
        else if(ajaxObj.readyState == 4 && ajaxObj.status == 404) {
            var last=ajaxObj.responseText; //将JSON对象转化为JSON字符
            var obj = JSON.parse(last);
            alert(obj.error);
        }
    }
}

function process_major_info() {
    var ajaxObj = new XMLHttpRequest();
    ajaxObj.open('get', '/admin/major/select');
    ajaxObj.send();
    ajaxObj.onreadystatechange = function () {
        if (ajaxObj.readyState == 4 && ajaxObj.status == 200) {
            console.log('Data returned successfully');
            console.log(ajaxObj.responseText);
            var last=ajaxObj.responseText; //将JSON对象转化为JSON字符
            var obj = JSON.parse(last);
            var majors = obj.majors;

            var tablecontainer = document.getElementById("tablecontainer");
            while(tablecontainer.hasChildNodes()) {
                tablecontainer.removeChild(tablecontainer.firstChild);
            }

            var table=document.createElement("table");
            table.style.width = "790px";
            table.style.borderCollapse = "collapse";
            table.border = 1;
            table.className = "table table-striped table-bordered table-hover";

            var thead=document.createElement("thead");

            var row = document.createElement('tr');
            var major_id = document.createElement('td');
            var major_name = document.createElement('td');
            var number_of_students = document.createElement('td');
            var detail = document.createElement("td");

            major_id.innerHTML = "Major ID";
            major_name.innerHTML = "Major Name";
            number_of_students.innerHTML = "Number of Students";
            detail.innerHTML = "Details";

            row.appendChild(major_id);
            row.appendChild(major_name);
            row.appendChild(number_of_students);
            row.appendChild(detail);

            thead.appendChild(row);
            table.appendChild(thead);

            var tbody = document.createElement('tbody');

            for (var i = 0; i < majors.length; i++) {
                var row = document.createElement('tr');
                
                var major_id = document.createElement('td');
                var major_name = document.createElement('td');
                var number_of_students = document.createElement('td');
                var detail = document.createElement('td');

                major_id.innerHTML = majors[i].major_id;
                major_name.innerHTML = majors[i].major_name;
                number_of_students.innerHTML = majors[i].number_of_students;
                detail.innerHTML = "View";
                detail.style = "cursor:pointer";
                
                detail.setAttribute('row',i.toString);
                detail.setAttribute("major_id",majors[i].major_id);
                
                detail.onclick = function() {
                    localStorage.setItem("major_id", this.getAttribute("major_id"));
                    localStorage.setItem("current_type", "change_major");
                    window.location.href = "Admin_Detail.html";
                }

                row.appendChild(major_id);
                row.appendChild(major_name);
                row.appendChild(number_of_students);
                row.appendChild(detail);
                tbody.appendChild(row);
            }
            table.appendChild(tbody);
            tablecontainer.appendChild(table); 
        }
        else if(ajaxObj.readyState == 4 && ajaxObj.status == 404) {
            var last=ajaxObj.responseText; //将JSON对象转化为JSON字符
            var obj = JSON.parse(last);
            alert(obj.error);
        }
    }
}

function process_major_course_info() {
    var ajaxObj = new XMLHttpRequest();
    ajaxObj.open('get', '/admin/major_course/select');
    ajaxObj.send();
    ajaxObj.onreadystatechange = function () {
        if (ajaxObj.readyState == 4 && ajaxObj.status == 200) {
            console.log('Data returned successfully');
            console.log(ajaxObj.responseText);
            var last=ajaxObj.responseText; //将JSON对象转化为JSON字符
            var obj = JSON.parse(last);
            var major_courses = obj.major_courses;

            var tablecontainer = document.getElementById("tablecontainer");
            while(tablecontainer.hasChildNodes()) {
                tablecontainer.removeChild(tablecontainer.firstChild);
            }

            var table=document.createElement("table");
            table.style.width = "790px";
            table.style.borderCollapse = "collapse";
            table.border = 1;
            table.className = "table table-striped table-bordered table-hover";

            var thead=document.createElement("thead");

            var row = document.createElement('tr');
            var major_id = document.createElement('td');
            var major_name = document.createElement('td');
            var course_id = document.createElement('td');
            var course_name = document.createElement('td');
            var detail = document.createElement("td");

            major_id.innerHTML = "Major ID";
            major_name.innerHTML = "Major Name";
            course_id.innerHTML = "Course ID";
            course_name.innerHTML = "Course Name"
            detail.innerHTML = "Details";

            row.appendChild(major_id);
            row.appendChild(major_name);
            row.appendChild(course_id);
            row.appendChild(course_name);
            row.appendChild(detail);

            thead.appendChild(row);
            table.appendChild(thead);

            var tbody = document.createElement('tbody');

            for (var i = 0; i < major_courses.length; i++) {
                var row = document.createElement('tr');
                
                var major_id = document.createElement('td');
                var major_name = document.createElement('td');
                var course_id = document.createElement('td');
                var course_name = document.createElement('td');
                var detail = document.createElement("td");

                major_id.innerHTML = major_courses[i].major_id;
                major_name.innerHTML = major_courses[i].major_name;
                course_id.innerHTML = major_courses[i].course_id;
                course_name.innerHTML = major_courses[i].course_name;
                detail.innerHTML = "View";
                detail.style = "cursor:pointer";
                
                detail.setAttribute('row',i.toString);
                detail.setAttribute("major_id", major_courses[i].major_id);
                detail.setAttribute("course_id", major_courses[i].course_id);
                detail.onclick = function() {
                    localStorage.setItem("major_id", this.getAttribute("major_id"));
                    localStorage.setItem("course_id", this.getAttribute("course_id"));
                    localStorage.setItem("current_type", "change_major_course");
                    window.location.href = "Admin_Detail.html";
                }

                row.appendChild(major_id);
                row.appendChild(major_name);
                row.appendChild(course_id);
                row.appendChild(course_name);
                row.appendChild(detail);
                tbody.appendChild(row);
            }
            table.appendChild(tbody);
            tablecontainer.appendChild(table); 
        }
        else if(ajaxObj.readyState == 4 && ajaxObj.status == 404) {
            var last=ajaxObj.responseText; //将JSON对象转化为JSON字符
            var obj = JSON.parse(last);
            alert(obj.error);
        }
    }
}