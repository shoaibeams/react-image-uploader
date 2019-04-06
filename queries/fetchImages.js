module.exports = `use images;
create database if not exists images;
create table if not exists images (original_filename varchar(255) primary key not null, 
secure_url varchar(255) not null, amount integer, selectedDay date);
select * from images; `
