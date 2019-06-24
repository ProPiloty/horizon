INSERT INTO flight_services (
    flight_id,
    fuel_status,
    fuel_gal,
    fuel_type,
    fuel_prist,
    lav_dump_status,
    lav_fill_status,
    lav_fill_gal,
    potable_status
)
VALUES (
    ${id},
    ${fuel_status},
    ${fuel_gal},
    ${fuel_type},
    ${fuel_prist},
    ${lav_dump_status},
    ${lav_fill_status},
    ${lav_fill_gal},
    ${potable_status}
);