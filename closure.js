function employee() {
    var employee_dept = 'IT';
   
    return {
        getDept: function ()  {           
          return employee_dept;
        },
        setDept: function (new_dept)  {
            employee_dept = new_name;
        }
    }
​
}

var emp1 = employee (); // In this juncture, the employee_dept outer function has returned.​
mjID.getDept(); // IT
mjID.setDept('Account'); // Changes the outer function's variable​
mjID.getDept(); //outputs Account