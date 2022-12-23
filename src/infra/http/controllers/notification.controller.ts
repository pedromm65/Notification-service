import { Body, Controller, Post } from '@nestjs/common';
import { SendNotification } from '../../../application/use-cases/send-notification';
import { CreateNotificationDTO } from '../dtos/create-notification-dto';

@Controller('notifications')
export class NotificationsController {
  constructor(private sendNotification: SendNotification) {}

  @Post()
  async create(@Body() body: CreateNotificationDTO) {
    const { recipientId, content, category } = body;

    const { notification } = await this.sendNotification.execute({
      recipientId,
      category,
      content,
    });

    return { notification };
  }
}
