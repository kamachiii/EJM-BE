package queues

import (
	"github.com/adjust/rmq/v5"
	redis8 "github.com/go-redis/redis/v8"
)

type Queues struct {
	rmq rmq.Connection
}

type QueueLists struct {
	Test             rmq.Queue
	ReportQuestioner rmq.Queue
	Inventory        rmq.Queue
	VolumeAttachment rmq.Queue
}

var (
	tag = "TKD Queues"
)

const (
	TestQueue             = "test"
	QuestionerQueue       = "report_questioner"
	VolumeAttachmentQueue = "volume_attachment"
)

func NewQueues(redis8Conn *redis8.Client) (*Queues, error) {
	rmqConn, err := rmq.OpenConnectionWithRedisClient(tag, redis8Conn, nil)

	return &Queues{
		rmq: rmqConn,
	}, err
}

func (queue *Queues) GetQueues() *QueueLists {
	testQueue, _ := queue.rmq.OpenQueue(TestQueue)
	questionerQueue, _ := queue.rmq.OpenQueue(QuestionerQueue)
	volumeAttachmentQueue, _ := queue.rmq.OpenQueue(VolumeAttachmentQueue)

	return &QueueLists{
		Test:             testQueue,
		ReportQuestioner: questionerQueue,
		VolumeAttachment: volumeAttachmentQueue,
	}
}
