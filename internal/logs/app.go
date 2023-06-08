package logs

import (
	"EJM/utils"
	"errors"
	"fmt"
	"log"
	"os"
	"sync"
	"time"
)

type Log struct {
	sync.RWMutex
	log           *log.Logger
	file          *os.File
	defaultLogger *log.Logger
}

type ILog interface {
	Debug(msg ...any)
	Error(msg ...any)
	Info(msg ...any)
	Warn(msg ...any)
}

func (l *Log) NewLogger(prefix string) {
	// logging
	currentTime := time.Now()
	formatLog := fmt.Sprintf("/logs/apps/app_%s.log", currentTime.Format("2006-01-02"))
	logDirectory := utils.GetWorkingDirectoryContent(formatLog)

	f, err := os.OpenFile(logDirectory, os.O_RDWR|os.O_CREATE|os.O_APPEND|os.O_WRONLY, 0666)
	if err != nil {
		if errors.Is(err, os.ErrNotExist) {
			f, _ = os.Create(logDirectory)
			f, err = os.OpenFile(logDirectory, os.O_RDWR|os.O_CREATE|os.O_APPEND, 0666)
		}
	}
	l.file = f
	l.log = log.New(f, prefix, log.LstdFlags|log.Lshortfile|log.Lmsgprefix)
	l.defaultLogger = log.New(os.Stdout, prefix, log.LstdFlags|log.Lshortfile|log.Lmsgprefix)
}

func (l *Log) print(msg any, prefix string) {
	l.NewLogger(prefix)
	l.Lock()
	l.log.Println(msg)
	l.defaultLogger.Println(msg)
	defer l.Unlock()
	l.file.Close()
}

func Debug(msg ...any) {
	l := Log{}
	l.print(msg, "DEBUG: ")
}

func Info(msg ...any) {
	l := Log{}
	l.print(msg, "INFO: ")
}

func Error(msg ...any) {
	l := Log{}
	l.print(msg, "ERROR: ")
}

func Warn(msg ...any) {
	l := Log{}
	l.print(msg, "WARN: ")
}
