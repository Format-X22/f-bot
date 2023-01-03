import { Column, DataType, Model, Table, Unique } from 'sequelize-typescript';

export enum EIntensiveOptions {
    MAX = 'Максимальная',
    HIGH = 'Высокая',
    MEDIUM = 'Средняя',
    LOW = 'Низкая',
    MIN = 'Минимальная',
    PAUSE = 'Приостановить новые задания',
}

@Table
export class User extends Model {
    isAdmin: boolean;

    @Unique
    @Column(DataType.INTEGER)
    userId: number;

    @Column(DataType.BOOLEAN)
    isActive: boolean;

    @Column(DataType.BOOLEAN)
    isBanned: boolean;

    @Column(DataType.STRING(256))
    banReason: string;

    @Column(DataType.BOOLEAN)
    isBoring: boolean;

    @Column(DataType.STRING(256))
    firstName: string;

    @Column(DataType.STRING(256))
    lastName: string;

    @Column(DataType.STRING(256))
    username: string;

    @Column(DataType.STRING(64))
    tgLang: string;

    @Column(DataType.INTEGER)
    chatId: number;

    @Column(DataType.STRING(128))
    state: string;

    @Column(DataType.STRING(2048))
    about: string;

    @Column(DataType.FLOAT)
    rating: number;

    @Column(DataType.ENUM(...Object.values(EIntensiveOptions)))
    intensive: EIntensiveOptions;
}
