-- select the park name, campground name, open_from_mm, open_to_mm & daily_fee ordered by park name and then campground name
Select park.name, campground.name, open_from_mm, open_to_mm, daily_fee From park
Join campground on park.park_id = campground.park_id
Order by park.name, campground.name;

-- select the park name and the total number of campgrounds for each park ordered by park name
Select park.name, count(campground_id) from park
Join campground on park.park_id = campground.park_id
Group by park.name
Order by park.name;


-- select the park name, campground name, site number, max occupancy, accessible, max rv length, utilities where the campground name is 'Blackwoods'
Select park.name, campground.name, site_number, max_occupancy, accessible, max_rv_length, utilities From park
Join campground on park.park_id = campground.park_id
Join site on campground.campground_id = site.campground_id
Where campground.name = 'Blackwoods';

/*
  select park name, campground, total number of sites (column alias 'number_of_sites') ordered by park
  -------------------------------------------------
    Acadia	Blackwoods	276
    Acadia	Seawall	198
    Acadia	Schoodic Woods	92
    Arches	"Devil's Garden"	49
    Arches	Canyon Wren Group Site	1
    Arches	Juniper Group Site	1
    Cuyahoga Valley	The Unnamed Primitive Campsites	5
  -------------------------------------------------
*/
Select p.name, c.name, count(site_id) number_of_sites from park p
Join campground c on p.park_id = c.park_id
Join site s on c.campground_id = s.campground_id
Group by p.name, c.name
Order by p.name asc, number_of_sites desc;


-- select site number, reservation name, reservation from and to date ordered by reservation from date
Select site_number, reservation.name, from_date, to_date from site
Join reservation on site.site_id = reservation.site_id
Order by from_date;



/*
  select campground name, total number of reservations for each campground ordered by total reservations desc
  -------------------------------------------------
    Seawall	13
    Blackwoods	9
    "Devil's Garden"	7
    Schoodic Woods	7
    The Unnamed Primitive Campsites	5
    Canyon Wren Group Site	4
    Juniper Group Site	4
  -------------------------------------------------
*/
Select campground.name, count(reservation_id) as total_reservations from campground
Join site on campground.campground_id = site.campground_id
Join reservation on site.site_id = reservation.site_id
Group by campground.name
Order by total_reservations desc;




