-- ONE-TO-ONE
create table users
(
    user_id serial primary KEY,
    user_name varchar,
    user_password varchar
)

create table ssn
(
    ssn_id serial primary KEY,
    ssn_number varchar,
    ssn_user_id integer references users(user_id)
);

-- ONE-TO-MANY & DB PATTERNS (DATATYPES)
create table categories
(
    category_id serial primary key,
    category_type varchar
);

create table bills
(
    bill_id serial Primary Key,
    bill_name varchar,
    bill_amount integer,
    bill_duedate date,
    bill_user_id integer references users(user_id),
    bill_category_id integer references categories(category_id)
);

-- ALTER TABLE
alter table bills
drop column bill_duedate;

-- MANY-TO-MANY JUNCTION TABLE
create table users_bills
(
    users_bills_id serial primary KEY,
    users_bills_user_id integer references users(user_id),
    users_bills_bill_id integer references bills(bill_id)
);

-- SUB QUERIES --
select *
from bills
where bill_user = $1

--JOIN TABLES
select *
from bills
    join users
    on users.user_id = bills.bill_user_id










-- Enter users
insert into users
    (user_name, user_password)
values
    ('khiavdim', 'khiavdim'),
    --1
    ('gaoyee', 'gaoyee'),
    --2
    ('xyivfab', 'xyivfab'),
    --3
    ('tiatu', 'tiatu');
--4
select *
from users;

-- Enter categories
insert into categories
    (category_type)
values
    ('Mortgage/Rent'),
    --1
    ('Utilities'),
    --2
    ('Food'),
    --3
    ('Household'),
    --4
    ('Vehicle Expenses'),
    --5
    ('Insurance'),
    --6
    ('Credit Cards'),
    --7
    ('Miscellaneous');
--8
select *
from categories

-- Enter bills
insert into bills
    (bill_name, bill_amount, bill_duedate, bill_user_id, bill_category_id)
values
    ('at&t', 250, '2019-08-20', 1, 2),
    --1
    ('Verizon', 130, '2019-07-20', 3, 2),
    --2
    ('Best Buy', 50, '2019-08-20', 1, 7),
    --3
    ('Bank of America', 1000, '2019-09-10', 1, 1),
    --4
    ('Chase', 40, '2019-09-01', 2, 7),--5
    ('PG&E', 160, '2019-08-01', 4, 2),
    --6
    ('Walmart', 60, '2019-08-02', 3, 3),
    --7
    ('Wells Fargo', 250, '2019-08-02', 1, 5),
    --8
    ('Southwest', 123, '2019-08-10', 2, 6),
    --9
    ('Target', 50, '2019-08-10', 4, 4);
--10
select *
from bills;

-- Enter bills/users
insert into users_bills
    (users_bills_user_id, users_bills_bill_id)
values
    (1 , 2),
    (1, 7),
    (1, 5),
    ()






/* JOIN TABLES */
select *
from users
    join bills
    on bills.bills_user_id = users.user_id
where users.user_id = $1


