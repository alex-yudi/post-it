create table usuarios(
	id serial primary key,
  apelido varchar not null,
  email varchar not null unique,
  senha varchar not null
);

create table notas(
	id serial primary key,
  id_usuario int not null references usuarios(id),
  titulo varchar,
  corpo varchar, 
  data date default current_date,
  cor_corpo varchar not null,
  cor_font varchar default 'black'
);