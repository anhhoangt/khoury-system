//获取学生信息，加载界面
function getstudentinfo(student_id) {
    var title = document.getElementById("title");
    title.innerHTML = "学生信息";
    var ajaxObj = new XMLHttpRequest();
    ajaxObj.open('get', "/admin/student/update?student_id="+student_id);
    ajaxObj.send();
    ajaxObj.onreadystatechange = function () {
        if (ajaxObj.readyState == 4 && ajaxObj.status == 200) {
            console.log('数据返回成功');
            console.log(ajaxObj.responseText);
            var last=ajaxObj.responseText; //将JSON对象转化为JSON字符
            var obj = JSON.parse(last);

            var container = document.getElementById("container");
            while(container.hasChildNodes()) {
                container.removeChild(container.firstChild);
            }

            var major_list = new Array();
            for (var i = 0; i < obj.majors.length; i ++) {
                major_list[i] = obj.majors[i].major_id + "/" + obj.majors[i].major_name;
            }

            container.appendChild(createDivWithInput("NUID", "id", "true", obj.student_id));
            container.appendChild(createDivWithInput("Name", "name", "false", obj.student_name));
            container.appendChild(createDivWithSelection("Gender", "sexes", obj.sex, new Array("F","M")));
            container.appendChild(createDivWithInput("Year of birth", "birth_year", "false", obj.birth_year));
            container.appendChild(createDivWithInput("State", "province", "false", obj.province));
            container.appendChild(createDivWithInput("Year of birth", "enter_year", "false", obj.enter_year));
            container.appendChild(createDivWithSelection("Major No/Name", "major_ids", obj.major_id+"/"+obj.major_name, major_list));
            
            container.appendChild(createButton("modify", "25px", modifystudent));
            container.lastChild.appendChild(createButtonWithoutDiv("Delete", "0px", deletestudent));
        }
    }
}

//获取老师信息，加载页面
function getteacherinfo(teacher_id) {
    var title = document.getElementById("title");
    title.innerHTML = "Professor Information";
    var ajaxObj = new XMLHttpRequest();
    ajaxObj.open('get', "/admin/teacher/update?teacher_id="+teacher_id);
    ajaxObj.send();
    ajaxObj.onreadystatechange = function () {
        if (ajaxObj.readyState == 4 && ajaxObj.status == 200) {
            console.log('Data returned successfully');
            console.log(ajaxObj.responseText);
            var last = ajaxObj.responseText; //将JSON对象转化为JSON字符     
            var obj = JSON.parse(last);
            var container = document.getElementById("container");
            while(container.hasChildNodes()) {
                container.removeChild(container.firstChild);
            }
            container.appendChild(createDivWithInput("Teacher No","id","true",obj.teacher_id));
            container.appendChild(createDivWithInput("Name","name","false",obj.teacher_name));
            container.appendChild(createDivWithSelection("Gender", "sexes", obj.sex, new Array("F","M")));
            container.appendChild(createDivWithInput("Year of Birth", "birth_year", "false", obj.birth_year));
            // container.appendChild(createDivWithInput("授课数量", "number_of_courses", "false", obj.number_of_courses));
            
            container.appendChild(createButton("modify", "25px", modifyteacher));
            container.lastChild.appendChild(createButtonWithoutDiv("delete", "0px", deleteteacher));
        }
    }
}

//获取课程信息，加载页面
function getcourseinfo(course_id) {
    var title = document.getElementById("title");
    title.innerHTML = "课程信息";
    var ajaxObj = new XMLHttpRequest();
    ajaxObj.open('get', "/admin/course/update?course_id="+course_id);
    ajaxObj.send();
    ajaxObj.onreadystatechange = function () {
        if (ajaxObj.readyState == 4 && ajaxObj.status == 200) {
            console.log('数据返回成功');
            console.log(ajaxObj.responseText);
            var last=ajaxObj.responseText; //将JSON对象转化为JSON字符     
            var obj = JSON.parse(last);
            var container = document.getElementById("container");
            while(container.hasChildNodes()) {
                container.removeChild(container.firstChild);
            }

            var teacher_list = new Array();
            var default_value;
            for (var i = 0; i < obj.teachers.length; i ++) {
                teacher_list[i] = obj.teachers[i].teacher_id + "/" + obj.teachers[i].teacher_name;
                if (teacher_list[i].match(obj.teacher_id)) {
                    default_value = teacher_list[i];
                }
            }

            container.appendChild(createDivWithInput("Course ID", "id", "true", obj.course_id));
            container.appendChild(createDivWithInput("Course Name", "name", "false", obj.course_name));
            container.appendChild(createDivWithInput("Academic Year", "year", "false", obj.year));
            container.appendChild(createDivWithSelection("Semester", "semester", obj.semester, new Array("S","F")));
            container.appendChild(createDivWithInput("Credit", "credit", "false", obj.credit));
            container.appendChild(createDivWithSelection("Teacher No/Name", "teacher_ids", default_value, teacher_list));
            
            container.appendChild(createButton("Modify", "25px", modifycourse));
            container.lastChild.appendChild(createButtonWithoutDiv("Delete", "0px", deletecourse));
        }
    }
}

//获取专业信息，加载界面
function getmajorinfo(major_id) {
    var title = document.getElementById("title");
    title.innerHTML = "Major Information";
    var ajaxObj = new XMLHttpRequest();
    ajaxObj.open('get', "/admin/major/update?major_id="+major_id);
    ajaxObj.send();
    ajaxObj.onreadystatechange = function () {
        if (ajaxObj.readyState == 4 && ajaxObj.status == 200) {
            console.log('Data returned successfully');
            console.log(ajaxObj.responseText);
            var last=ajaxObj.responseText; //将JSON对象转化为JSON字符     
            var obj = JSON.parse(last);
            var container = document.getElementById("container");
            while(container.hasChildNodes()) {
                container.removeChild(container.firstChild);
            }

            container.appendChild(createDivWithInput("Major ID", "id", "true", obj.major_id));
            container.appendChild(createDivWithInput("Major Name", "name", "false", obj.major_name));
            
            container.appendChild(createButton("Modify", "25px", modifymajor));
            container.lastChild.appendChild(createButtonWithoutDiv("Delete", "0px", deletemajor));
        }
    }
}

//获取专业选课信息，加载界面
function getmajorcourseinfo(major_id, course_id) {
    var title = document.getElementById("title");
    title.innerHTML = "专业选课信息";
    var container = document.getElementById("container");
    while(container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }

    container.appendChild(createDivWithInput("Major ID", "major_id", "true", major_id));
    container.appendChild(createDivWithInput("Course ID", "course_id", "true", course_id));
    
    container.appendChild(createButton("Delete", "0px", deletemajorcourse));
}