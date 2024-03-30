NAME:

migrate:
	npx sequelize-cli db:migrate

undo-migration:
	npx sequelize-cli db:migrate:undo

undo-all-migration:
	npx sequelize-cli db:migrate:undo:all

seed:
	npx sequelize-cli db:seed:all

create-migration:
	npx sequelize-cli migration:create --name $(NAME)

create-seed:
	npx sequelize-cli seed:generate --name $(NAME)