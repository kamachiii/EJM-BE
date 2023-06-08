# EJM Assesment & Monitoring Backend

## Cara setup


* Clone Project
* Buka CMD Masuk ke directory aplikasi
* jalankan `go get`
* setup folder vendor dengan jalankan `go mod vendor`
* Setup file `.env` bisa copy dari `.env.example`
* Running aplikasi dengan jalankan script `go run main.go`


## Struktur Direktori

### `/cmd`

Berisi command untuk migration and seeder aplikasi

#### Cara running migration

* Setup model yang ingin dimigrasikan
* Buka folder cmd dengan mengarahkan folder app
* jalankan `go run cmd/migration.go`

### Cara running seeder

* Setup script seeder di folder `/scripts`
* Buka folder cmd dengan mengarahkan folder app
* jalankan `go run cmd/seeder.go`

### `/internal`

Berisi middleware, routing dan setup server

kalo bingung liat aja contohnya

### `/pkg`

Berisi Folder bisnis logic seperti

* service ( Bisnis logic )
* controller ( Request Handler )
* models ( DB Model )
* repository ( DB Logic CRUD )

### `/vendor`

Dependency aplikasi, wajib pake. karena biar support di
laptop dev lain

## Common Application Directories

### `/configs`

Configurasi aplikasi, bisa liat contohnya

### `/init`

Berisi Koneksi Database

### `/scripts`

Berisi Script untuk seeder data ke database


### `/build`

Packaging and Continuous Integration.

Put your cloud (AMI), container (Docker), OS (deb, rpm, pkg) package configurations and scripts in the `/build/package` directory.

Put your CI (travis, circle, drone) configurations and scripts in the `/build/ci` directory. Note that some of the CI tools (e.g., Travis CI) are very picky about the location of their config files. Try putting the config files in the `/build/ci` directory linking them to the location where the CI tools expect them (when possible).

### `/deployments`

IaaS, PaaS, system and container orchestration deployment configurations and templates (docker-compose, kubernetes/helm, mesos, terraform, bosh). Note that in some repos (especially apps deployed with kubernetes) this directory is called `/deploy`.

### `/test`

Setup E2E test

## Other Directories

### `/docs`

Berisi Informasi swagger untuk API

### `/assets`

Other assets to go along with your repository (images, logos, etc).

## Directories You Shouldn't Have

### `/src`

Some Go projects do have a `src` folder, but it usually happens when the devs came from the Java world where it's a common pattern. If you can help yourself try not to adopt this Java pattern. You really don't want your Go code or Go projects to look like Java :-)

Don't confuse the project level `/src` directory with the `/src` directory Go uses for its workspaces as described in [`How to Write Go Code`](https://golang.org/doc/code.html). The `$GOPATH` environment variable points to your (current) workspace (by default it points to `$HOME/go` on non-windows systems). This workspace includes the top level `/pkg`, `/bin` and `/src` directories. Your actual project ends up being a sub-directory under `/src`, so if you have the `/src` directory in your project the project path will look like this: `/some/path/to/workspace/src/your_project/src/your_code.go`. Note that with Go 1.11 it's possible to have your project outside of your `GOPATH`, but it still doesn't mean it's a good idea to use this layout pattern.



## Catatan Penting

Minimal Buat Unit testing untuk suatu services,
karena mengurangi error, untuk contoh bisa di liat di folder
services dan buka file dengan akhiran `_test.go`.

Sebelum Membuat Unit Testing wajib membuat object mocking
repository. contohnya bisaa diliat di `repository_mock.go`

cara jalankan script test

#### `go test namafile_test.go`

cara nge cek dari suatu logic apakah terjadi race conditino

### `go test -race`

cara jalanakan benchmark service

### baca dokumentasi resmi aja

