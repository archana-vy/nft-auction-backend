import { User } from "src/user/schema/user.schema";
import { Column, Entity, ManyToOne, ObjectIdColumn } from "typeorm";

@Entity()
export class Bid {
    @ObjectIdColumn()
    _id: string;

    @ManyToOne(type => User, user => user.bid, { eager: false })
    bidder: User;

    @Column()
    amount: number;

    @Column()
    nft: string;

    @Column()
    tokenId: number;

    @Column()
    paymentToken: string;
}