INSERT INTO bills
    (billname, billamount, bill_user)
VALUES
    ($2, $3, $1);

select *
from bills
where bill_user = $1;