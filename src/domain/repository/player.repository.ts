import { Model } from 'sequelize'
import Player from '../models/player'

export interface PlayerRepository{
    getAllPlayers: () => Promise<Model<Player>[] | null>
    createPlayer: (player:Player) => Promise<Model<Player>>
    updatePlayerbyId: (playerID: number) => Promise<Model<Player> | null>
}