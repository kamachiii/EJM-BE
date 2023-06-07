package utils

import (
	"bytes"
	"fmt"
	"html/template"
	"net/smtp"
	"os"

	"gopkg.in/gomail.v2"
)

type RegistrationStudent struct {
	Class          int
	Package        string
	StudyStartDate string
	StudyEndDate   string
}

func SendMail(subject string, body string, to []string) {
	auth := smtp.PlainAuth(
		"",
		os.Getenv("EMAIL_USERNAME"),
		os.Getenv("EMAIL_PASSWORD"),
		os.Getenv("EMAIL_HOST"),
	)

	msg := "Subject:" + subject + "\n" + body

	err := smtp.SendMail(
		os.Getenv("EMAIL_HOST")+":"+os.Getenv("EMAIL_PORT"),
		auth,
		os.Getenv("EMAIL_USERNAME"),
		to,
		[]byte(msg),
	)

	if err != nil {
		fmt.Println(err)
	}
}

func SendMailHTML(subject string, templatePath string, to []string, data *RegistrationStudent) {
	var body bytes.Buffer
	t, err := template.ParseFiles(templatePath)
	t.Execute(&body, RegistrationStudent{
		Class:          data.Class,
		Package:        data.Package,
		StudyStartDate: data.StudyStartDate,
		StudyEndDate:   data.StudyEndDate,
	})

	auth := smtp.PlainAuth(
		"",
		os.Getenv("EMAIL_USERNAME"),
		os.Getenv("EMAIL_PASSWORD"),
		os.Getenv("EMAIL_HOST"),
	)

	headers := "MIME-version: 1.0;\nContent-Type: text/html; charset=\"UTF-8\";"

	msg := "Subject:" + subject + "\n" + headers + "\n\n" + body.String()

	err = smtp.SendMail(
		os.Getenv("EMAIL_HOST")+":"+os.Getenv("EMAIL_PORT"),
		auth,
		os.Getenv("EMAIL_USERNAME"),
		to,
		[]byte(msg),
	)

	if err != nil {
		fmt.Println(err)
	}
}

func SendGomailHTML(templatePath string) {
	var body bytes.Buffer
	t, err := template.ParseFiles(templatePath)
	t.Execute(&body, struct{ Name string }{
		Name: "Hanif Kumara",
	})

	m := gomail.NewMessage()
	m.SetHeader("From", os.Getenv("EMAIL_USERNAME"))
	m.SetHeader("To", "hnflasting@gmail.com")
	m.SetAddressHeader("Cc", "irfandinurdin96@gmail.com", "hanip.mutu@gmail.com")
	m.SetHeader("Subject", "Hello!")
	m.SetBody("text/html", body.String())

	d := gomail.NewDialer(os.Getenv(""), 587, os.Getenv("EMAIL_USERNAME"), os.Getenv("EMAIL_PASSWORD"))

	// Send the email to Bob, Cora and Dan.
	if err = d.DialAndSend(m); err != nil {
		panic(err)
	}

}
