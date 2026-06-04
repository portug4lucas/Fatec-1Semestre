TRUNCATE TABLE megasena;

COPY megasena
FROM 'C:/Users/LAB-79/Documents/megasena.csv'
WITH (
  FORMAT csv,
  HEADER true,
  DELIMITER ';',
  NULL 'NULL',
  ENCODING 'UTF8'
);