import { Model } from 'sequelize'
import Player from '../../domain/models/player'
import { PlayerRepository } from '../../domain/repository/player.repository'

export class PlayerService{
  constructor(private readonly playerRepository: PlayerRepository ){
    this.playerRepository = playerRepository
  }
    
  async getAllPlayers(): Promise<Model<Player>[] |null >{
    const allPlayers = this.playerRepository.getAllPlayers()
    // console.log('Service check')
    return allPlayers
  }
  async createPlayer(newPlayer:Player): Promise<Model<Player>> {

    const player = this.playerRepository.createPlayer(newPlayer)
    return player
  }
  async updatePlayerbyId(playerID: number): Promise<Model<Player> | null>{
    const player = this.playerRepository.updatePlayerbyId(playerID)
    return player
  }
}