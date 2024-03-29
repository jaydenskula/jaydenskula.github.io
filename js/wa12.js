// PROBLEM #1
let employee1 = 
{
    "first_name": "Sam",
    "department": "Tech",
    "designation": "Manager",
    "salary": 40000,
    "raise_eligible": true
}
  
let employee2 = 
{
    "first_name": "Mary",
    "department": "Finance",
    "designation": "Trainee",
    "salary": 18500,
    "raise_eligible": true
};
  
let employee3 = 
{
    "first_name": "Bill",
    "department": "HR",
    "designation": "Executive",
    "salary": 21200,
    "raise_eligible": false
};

console.log(employee1);
console.log(employee2);
console.log(employee3);


// PROBLEM #2
let company =
{
    "companyName": "Tech Stars",
    "website": "www.techstars.site",
    "employees": [employee1, employee2, employee3]
}

console.log(company);


//PROBLEM #3
let employee4 =
{
    "first_name": "Anna",
    "department": "Tech",
    "designation": "Executive",
    "salary": 25600,
    "raise_eligible": false
}

company.employees.push(employee4);
console.log(company);


//PROBLEM #4
let salary1 = employee1.salary;
// console.log(salary1);
let salary2 = employee2.salary;
// console.log(salary2);
let salary3 = employee3.salary;
// console.log(salary3);
let salary4 = employee4.salary;
// console.log(salary4);

totalSalary = salary1 + salary2 + salary3 + salary4;
console.log("Total Salary:" + totalSalary);


//PROBLEM #5
function updateSalary()
{
    for(let i=0; i < company.employees.length; i++)
    {
        if(company.employees[i].raise_eligible == true)
        {
            company.employees[i].salary = company.employees[i].salary + (company.employees[i].salary * 0.1);
            company.employees[i].raise_eligible = false;
        }
    }

    console.log(company);
}

updateSalary(company);



//PROBLEM #6
employee1 = 
{
    "first_name": "Sam",
    "department": "Tech",
    "designation": "Manager",
    "salary": 44000,
    "raise_eligible": false,
    "wfh" : true
}
  
employee2 = 
{
    "first_name": "Mary",
    "department": "Finance",
    "designation": "Trainee",
    "salary": 20350,
    "raise_eligible": false,
    "wfh" : false
};
  
employee3 = 
{
    "first_name": "Bill",
    "department": "HR",
    "designation": "Executive",
    "salary": 21200,
    "raise_eligible": false,
    "wfh" : false
};

employee4 =
{
    "first_name": "Anna",
    "department": "Tech",
    "designation": "Executive",
    "salary": 25600,
    "raise_eligible": false,
    "wfh" : true
}

company =
{
    "companyName": "Tech Stars",
    "website": "www.techstars.site",
    "employees": [employee1, employee2, employee3, employee4]
}
console.log(company);