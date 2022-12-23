import { InMemoryNotificationRepository } from '../../../test/repository/in-memory-notification-repository';

import { SendNotification } from './send-notification';

describe('Send notification', () => {
  it('Should be able to send a notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const sendNotification = new SendNotification(notificationRepository);

    const { notification } = await sendNotification.execute({
      content: 'This is a notification',
      category: 'social',
      recipientId: 'aaaaaaaa',
    });

    expect(notificationRepository.notifications).toHaveLength(1);
    expect(notificationRepository.notifications[0]).toEqual(notification);
  });
});
