use MVC_04_Data
delete from tblProducts where ProductID = 0
INSERT INTO tblProducts(ProductID, ProductName, ImageURL, ProductPrice, Description)
VALUES
(1, 'Iphone 14 Pro Max', 'https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-tim-thumb-600x600.jpg', 500, 'Description 1'),
(2, 'Iphone 14 Pro', 'https://cdn.tgdd.vn/Products/Images/42/247508/iphone-14-pro-vang-thumb-600x600.jpg', 500, 'Description 2'),
(3, 'Iphone 11', 'https://cdn.tgdd.vn/Products/Images/42/153856/iphone-11-trang-600x600.jpg', 500, 'Description 3'),
(4, 'Samsung Galaxy S23 Ultra', 'https://cdn.tgdd.vn/Products/Images/42/301796/samsung-galaxy-s23-ultra-green-thumbnew-600x600.jpg', 500, 'Description 4'),
(5, 'Samsung Galaxy S23 Xanh Mint', 'https://cdn.tgdd.vn/Products/Images/42/306994/samsung-galaxy-s23-fe-mint-thumbnew-600x600.jpg', 500, 'Description 5'),
(6, 'Oppo N2 Flip', 'https://cdn.tgdd.vn/Products/Images/42/299034/oppo-n2-flip-den-thumb-600x600.jpg', 500, 'Description 6'),
(7, 'Oppo N2 Reno10 Blue', 'https://cdn.tgdd.vn/Products/Images/42/305695/oppo-reno10-blue-thumbnew-600x600.jpg', 500, 'Description 7'),
(8, 'Iphone 13 Pro', 'https://cdn.tgdd.vn/Products/Images/42/250258/iphone-13-midnight-1-600x600.jpg', 500, 'Description 8'),
(9, 'Oppo Reno10 Pro', 'https://cdn.tgdd.vn/Products/Images/42/306979/oppo-reno10-pro-grey-thumbnew-600x600.jpg', 500, 'Description 9'),
(10, 'Oppo Find N3 Flip', 'https://cdn.tgdd.vn/Products/Images/42/317981/oppo-find-n3-flip-pink-thumb-600x600.jpeg', 500, 'Description 10');
drop table tblProducts
create table tblProducts
(
	ProductID int primary key,
	ProductName nvarchar(200),
	ImageURL varchar(200),
	ProductPrice int,
	Description varchar(200),)
CREATE TABLE tblMember (
    MemberName nvarchar(50) PRIMARY KEY, 
    sTaiKhoan varchar(20),
    sMatKhau varchar(20),
);
CREATE TABLE tblNhanxet (
    PK_iNhanxetID int IDENTITY PRIMARY KEY ,  
    sNoidung nvarchar(200),  
    tThoigianGhinhan datetime,  
    FK_iProductID int,  
    FK_MemberName nvarchar(50),  
    FOREIGN KEY (FK_iProductID) REFERENCES tblProducts(ProductID), 
    FOREIGN KEY (FK_MemberName) REFERENCES tblMember(MemberName) 
);
drop table tblNhanxet
INSERT INTO tblMember (MemberName, sTaiKhoan, sMatKhau)
VALUES 
    ('Nguyen Van A', 'nguyenvana', 'password123'),
    ('Le Thi B', 'lethib', 'password456'),
    ('Tran Van C', 'tranvanc', 'password789'),
    ('Hoang Thi D', 'hoangthid', 'password321'),
    ('Vu Van E', 'vuvane', 'password654');