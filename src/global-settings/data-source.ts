import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "127.0.0.1",
    port: 3306,
    username: "root",
    password: "admin119",
    database: "cancer_hospital",
    synchronize: false,
    logging: true,
    entities: ['dist/**/*.entity{.ts,.js}'],
    migrations: ['src/migration/**.ts'],
    subscribers: [],
    poolSize: 10,
    connectorPackage: 'mysql2',
    extra: {
        authPlugin: 'sha256_password',
    }
})

