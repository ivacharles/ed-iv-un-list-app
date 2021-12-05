create database craiglist;

use  craiglist;


CREATE TABLE users(
  userid INTEGER,
  name CHAR(15),
  password char(30),
  login CHAR(30),
  imgurl VARCHAR(255),
 PRIMARY KEY(userid),
);


CREATE TABLE post(
postid INTEGER,
userid INTEGER,
categories_id INTEGER ,
price INTEGER,
FOREIGN KEY ( categories) references  users(categories_id),
FOREIGN KEY ( user_id) references  users( user_id),
PRIMARY KEY(postid)

);

CREATE TABLE categories(
categories_id INTEGER,
category VARCHAR(100),
);

CREATE TABLE items(
    item_id INTEGER,
    item_name CHAR(50),
    itemurl CHAR(250),
    item_category INTEGER,
    item_price INTEGER,
    primary key (item_id),
    FOREIGN KEY (item_category) REFERENCES categories(catagories_id)    
);

