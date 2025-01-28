import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*', // Permet toutes les origines (tu peux restreindre ça en prod)
  },
})
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  // Gestion de la connexion d'un utilisateur
  handleConnection(client: Socket) {
    console.log(`Client connecté : ${client.id}`);
  }

  // Gestion de la déconnexion d'un utilisateur
  handleDisconnect(client: Socket) {
    console.log(`Client déconnecté : ${client.id}`);
  }

  // Réception des messages depuis le client
  @SubscribeMessage('message')
  handleMessage(client: Socket, payload: { user: string; text: string }) {
    console.log(`Message reçu de ${client.id}:`, payload);

    // Réémet le message à tous les clients
    this.server.emit('message', payload);
  }
}
