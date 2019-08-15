delete from bills
where bill_id = $1;

select *
from bills
where bill_user = $2;