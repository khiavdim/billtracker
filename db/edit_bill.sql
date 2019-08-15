update bills
set billname = $2, billamount = $3
where bill_id = $1;

select *
from bills
where bill_user = $1;