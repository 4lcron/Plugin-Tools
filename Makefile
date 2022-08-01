# Get the value of a property from the package.json file. For nested properties,
# use the dot notation (e.g. "dependencies.express").
define GetFromPkg
	$(shell node -p "require('./package.json').$(1)")
endef

PKG_NAME    := $(call GetFromPkg,name)
PKG_VERSION := $(call GetFromPkg,version)
DESCRIPTION := $(call GetFromPkg,description)
PROJECT_URL := $(call GetFromPkg,homepage)

build:
	@npm run lint
	@npm run scan
	@npm run build
	@echo "Build complete...

analyze:
	@npm run lint
	@npm run scan
