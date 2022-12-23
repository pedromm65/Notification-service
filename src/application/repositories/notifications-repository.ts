import { Notification } from '../notification';

export abstract class NotificationsRepository {
  abstract create(notification: Notification): Promise<void>;
}
