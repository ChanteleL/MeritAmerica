-- CAMPGROUND TABLE
-----------------------------------------------

-- select name and daily fee of all campgrounds
Select name, daily_fee From campground;

-- select name and daily fee of all campgrounds ordered by campground name
Select name, daily_fee From campground Order by name;

-- select name, open from month, open to month, and daily fee of the campgrounds where daily fee is less than $100
Select name, open_from_mm, open_to_mm, daily_fee From campground Where daily_fee <'100';

-- select name and daily fee of the campgrounds where the campground is open all year long
Select name, daily_fee From campground Where open_to_mm = '12' and open_from_mm = '01';


-- PARK TABLE
-----------------------------------------------

-- select name and description of all parks order by established date in descending order
Select name, description From park Order by establish_date desc;

-- select name and description of all parks in Ohio
Select name, description From park Where location = 'Ohio';

-- select name and description of all parks NOT in Ohio
Select name, description From park Where location != 'Ohio';

-- select the total number of visitors for all parks
Select sum(visitors) from park;

-- select the average number of visitors for all parks
Select avg(visitors) from park;


-- SITE TABLE
-----------------------------------------------

-- select all columns from site where utilities is true and order by max RV length with the largest coming first
Select * from site Where utilities = 'true' Order By max_rv_length desc;

-- select total number of sites that have utilities hook up
Select count(*) from site Where utilities = 'true';


-- RESERVATION TABLE
-----------------------------------------------

-- select reservation id, site id, name, from date, to date of the reservations where the checkin date is between the first and last day of the current month (hard coded month is ok)
Select reservation_id, site_id, name, from_date, to_date From reservation Where from_date Between '2022-05-01' and '2022-05-31';

-- select all columns from reservation where name includes 'Reservation'
Select * from reservation Where name like '%Reservation%';

-- select the total number of reservations in the reservation table
Select count(*) from reservation;

-- select reservation id, site id, name of the reservations where site id is in the list 9, 20, 24, 45, 46
Select reservation_id, site_id, name from reservation Where reservation_id = '9' or reservation_id = '20' or reservation_id = '24' or reservation_id = '45' or reservation_id = '46';

-- select the date and number of reservations for each date orderd by from_date in ascending order
Select from_date, count(reservation_id) from reservation group by from_date order by from_date asc;
