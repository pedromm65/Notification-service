import { NotificationsRepository } from 'src/application/repositories/notifications-repository';
import { Notification } from '../../src/application/notification';

export class InMemoryNotificationRepository implements NotificationsRepository {
  public notifications: Notification[] = [];
  async create(notification: Notification) {
    this.notifications.push(notification);
  }
}
