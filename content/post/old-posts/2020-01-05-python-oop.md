---
layout: post
title:  "Python OOPS Concepts"
description: "Some basic and advanced python oops concepts"
date:   2020-01-05 12:00:00 +0400
categories: python
---
self => instances -> methods taking this as the first arguement work on instances

cls => classes -> work on the entire class rather than an instance

both of them are context-aware

when working with classes, unlike regular methods that take instances as the first arguemnt and unlike class methods that take classes as the first argument, static methods take no arguments

# Object Oriented Concepts with Python

to declare a class in python you use the `class` keyword, if at all you want the class to be empty, you can use the `pass` keyword

example:

```python
class Employee:
    pass
```

### Instance variables

contain data this is unique to each instance of the class

## __init__(self)

dunder init is like the default constructor in java

self is (a reference to) THE INSTANCE ITSELF, which the initialize receives automatically and that is not restricted to self but self is the convention

here's what we mean:
 say we created that employee class, when we set a variable of the class, say first name, instead of doing `emp1.first = "lala"`, we do `self.first = "lala"`. Here emp1 is the instance and self is the **placeholder** for the instance

The first parameter of any class method is always the instance (which we have named self). Then when we create new instances we dont have to pass that instance/self.

The init method will be run automatically, emp1 is passed to the self attribute

example:

```python
class Employee:
    def __init__(self, first, last, pay):
        self.first = first
        self.last = last
        self.pay = pay
        self.email = first + '.' + last + "@company.com"

    def fullname(self):
        print("{} {}".format(self.first, self.last))


# The init method will be run automatically, emp1 is passed to the self attribute
emp1 = Employee("Dhruv" ,"Jain", 50000)
```

When this is run the init method is run automatically

If you dont pass in the self method, you get this error:

```shell
Traceback (most recent call last):
  File ".\learning-computing\python-oop\HelloWorld.py", line 20, in <module>
    emp1.fullname()
TypeError: fullname() takes 0 positional arguments but 1 was given
```

This error arises because the class gives in the instance/self argument to the class-method, but here we said that the method does NOT take any argument. That is why this error aries.

#### calling class method from the class rather than the instance

```python
# Calling class-method from instance
emp1.fullname()

# Calling class-method from class
Employee.fullname(emp1)
```

## class variable

class variables are variables that are same for all instances of a class when the instance is initialized

when a variable is called, python will first check if the variable exists in the namespace of the *instance*, if it does not exist, then python will check for it in the classes the instance inherits from.

class variables can be accessed via instances as well as classes:

```python
class Employee:

    num_of_emps = 0
    raise_amount = 1.04

    def __init__(self, first, last, pay):
       self.first = first
        # same things as before
        Employee.num_of_emps += 1

    def fullname(self):
        print("{} {}".format(self.first, self.last)) 

    def apply_raise(self):
        self.pay = int(self.pay * self.raise_amount)
        # if we hardcoded this to Employees.raise_amount,
        # instances cannot update this

emp1 = Employee()

# Employee.raise_amount == 1.04
# emp1.raise_amount == 1.04

emp1.raise_amount = 1.5
# now emp1.raise_amount == 1.5
# BUT Employee.raise_amount == 1.04
# self.raise_amount is a general case of emp1.raise_amount
```

a_name.lol -> hardcoded value of the class
self.lol -> can be changed by instances
emp1.lol -> are instance variables inherited from class or are set afterwards

## Class methods

to define a class method, we use the decorator `@classmethod` one line above the method.

What class methods do is that they manipulate the whole class *along with all instances of the class*

Think of them as static methods (as seen in java)

Like the `self` convention used for instances in python, classes have a convention called `cls`

```python
class Employee
    raise_amt = 1.04
    
    @classmethod
    def set_raise_amount(cls, amount):
        cls.raise_amt = amount
        # or do something
```

#### class methods as custom constructors
class methods can be used to construct new classes as follows:
```python
class Employee:
    num_of_emps = 0

    def __init__(self, first, last, pay):
        self.first = first
        self.last = last
        self.pay = pay

        Employee.num_of_emps += 1

    def fullname(self):
        print("{} {}".format(self.first, self.last)) 

    @classmethod
    def from_string(cls, emp_str):
        first, last, pay = emp_str.split("-")
        return cls(first, last, pay)
	# Most important point here
	# return a class object after parsing string

emp3_string = "water bottle"
emp3 = Employee.from_string(emp3_string)

print(Employee.num_of_emps)
emp3.fullname()
```
In the above example, the `cls()` is a class constructor. It creates a class object from by applying the given logic

### Static methods
when working with classes, unlike regular methods that take instances as the first arguemnt and unlike class methods that take classes as the first argument, static methods take no arguments

use static methods where you dont need to use any of the class's variables or functions. In the example we are using, this may be the day of the week, which is entirely independent of the name or pay or anything else from the class really.

creating a staticmethod:

1. using staticmethod() function
	```class Calculator:
	
	    def addNumbers(x, y):
	        return x + y
	
	# create addNumbers static method
	Calculator.addNumbers = staticmethod(Calculator.addNumbers)
	
	print('Product:', Calculator.addNumbers(15, 110))
	```

2. using @staticmethod decorator
	```class Calculator:
	
	    # create addNumbers static method
	    @staticmethod
	    def addNumbers(x, y):
	        return x + y
	
	print('Product:', Calculator.addNumbers(15, 110))
	```

## Inherititance
to inherit a class's attributes in anohter class, just pass it as an arguement to the inheriting class
eg `class Developer(Employee):`

remeber python resolves methods and variables as:

1. current class object
2. parent class object
3. parent's parent class object

and so on

### super()
To call the methods of a class above the current class, use `super`, for eg:
```python
class Developer(Employee):
    raise_amount = 1.10
    # Can you think why this first, last ... is being passed down?
    # Think.
    # You need to do the same with *args and **kwargs also
    def __init__(self, first, last, pay, prog_lang):
        super().__init__(first, last, pay)
        self.prog_lang = prog_lang
```
oh and while using super, you dont need to pass through self in the `super().__init__()`, however you need to pass ALL the fields of the super class in the class's `__init__`

## Most of the code uptill now
```python
class Employee:

    num_of_emps = 0
    raise_amount = 1.04

    def __init__(self, first, last, pay):
        self.first = first
        self.last = last
        self.pay = pay
        self.email = first + '.' + last + "@company.com"

        Employee.num_of_emps += 1

    def fullname(self):
        print("{} {}".format(self.first, self.last)) 

    def apply_raise(self):
        self.pay = int(self.pay * self.raise_amount)
        # if we hardcoded this to Employees.raise_amount, instances cannot update this value
    
    @classmethod
    def from_string(cls, emp_str):
        first, last, pay = emp_str.split("-")
        return cls(first, last, pay)
    @staticmethod
    def is_workday(day):
        if day.weekday() == 5 or day.weekday() == 6:
            return False
        else:
            return True

class Developer(Employee):
    raise_amount = 1.10

    def __init__(self, first, last, pay, prog_lang):
        super().__init__(first, last, pay)
        self.prog_lang = prog_lang

class Manager(Employee):
    def __init__(self, first, last, pay, employees):
        super().__init__(first, last, pay)
        if employees == None:
            self.employees = []
        else:
            self.employees = employees
    def add_emp(self, emp):
        if emp not in self.employees:
            self.employees.append(emp)
    
    def remove_emp(self, emp):
        if emp in self.employees:
            self.employees.remove(emp)
    def disp_emp(self):
        for i in self.employees:
            print(emp.fullname())

dev1 = Developer("Dhruv" ,"Jain", 50000, "python")
dev2 = Developer("Mamma", "Hand", 60000, "java")

#print(dev1.pay)
#dev1.apply_raise()
#print(dev1.pay)

# dev1.fullname()
# dev2.fullname()

mgr1 = Manager("sue", "smith", 70000, [dev1])

#print(isinstance(mgr1, Manager))
#print(isinstance(mgr1, Employee))
#print(isinstance(mgr1, Developer))

print(issubclass(Manager, Employee))
```

## Magic methods
allows us to emulate built in behaviour within python and allows us to implement operator overloading

```python
def __repr__(self):
    # return a string for the DEVELOPERS to see

def __str__(self):
    # return stuff for the END USERS to see

def __add__(self, other):
    # defines how to add datatypes
    # And Yes, other is a convention
```

## Property decorators
property decorators allows methods to be accessed as variables rather than a function call
```python
class Employee:

    def __init__(self, first, last, pay):
        self.first = first
        self.last = last
        #self.email = first + '.' + last + "@company.com"
    
    @property
    def email(self):
        return("{}.{}@email.com".format(self.first, self.last)) 

    @property
    def fullname(self):
        return("{} {}".format(se lf.first, self.last)) 


emp1 = Employee("shriyas","Iyer", 50000)
emp2 = Employee("Vikrant", "Tiru", 70000)

print(emp1.email)
```

### Setter decorators and functions
To use the Setter decorator, use the method name you want to define along with
 .setter, for eg:
```python
    @fullname.setter
    def fullname(self, name):
        first, last = name.split(" ")
        self.first = first
        self.last = last
```

### deleter decorator
To use a deleter decorator, use the method name you want to use along with .deleter, and then while deleting, use the `del` keyword
```python
    @fullname.deleter
    def fullname(self):
        print("Deleting name")
        self.first = None
        self.last = None

del emp1.fullname
```


## Self == main??
**it is** `if __name__ == "__main__"`!!!

__name__ signifies name of the caller or something. __main__ is the caller then!