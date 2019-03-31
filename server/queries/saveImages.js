module.exports = `create database if not exists images;
    use images;         
    create table if not exists images (original_filename varchar(255) primary key not null, 
    secure_url varchar(255) not null);
    INSERT INTO images(original_filename, secure_url) VALUES(?,?);`
