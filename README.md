# Influent #

> visual analytics for big data transaction flow

Influent is a web-based application for visually and interactively following transaction flow, revealing actors and behaviors of potential concern that might otherwise go unnoticed. Summary visualization of transactional patterns and actor characteristics, interactive link expansion and dynamic entity clustering enable Influent to operate effectively at scale with big data sources, in any modern web browser. Influent has been used to explore data sets with millions of entities and hundreds of millions of transactions.

![Influent example with public Kiva data set](https://raw.github.com/unchartedsoftware/wiki-assets/master/influent/influent-kiva.png)

Service Provider Interfaces (SPIs) provide a plugin style framework for developers to provide runtime-injected modules for search, data access, clustering and other services. [Avro](http://avro.apache.org/) is used to define the SPI protocols in cross-language form in [influent-spi](influent-spi/src/main/avro). In process Java service implementations are injected via [Guice](https://code.google.com/p/google-guice/), which may optionally delegate to out of process providers using web services standards such as REST, for which Avro provides convenient serialization.

## Getting Started ##

Documentation on installing, configuring and using Influent is available in the [docs folder](https://github.com/unchartedsoftware/influent/tree/master/docs/src/) in the source code.

- Explore a [live demo](http://community.influent.org/demos/) at the Influent web page.
- Download a [packaged distribution](https://github.com/unchartedsoftware/influent/tree/master/docs/src/community/download/) of the demo that you can deploy and run on your own web server.
- Review and install the necessary [prerequisites](https://github.com/unchartedsoftware/influent/tree/master/docs/src/community/developer-docs/how-to/installation/#prerequisites) before installing Influent on your machine.
- Learn how to [build](https://github.com/unchartedsoftware/influent/tree/master/docs/src/community/developer-docs/how-to/installation/#install-source-code) Influent from the source code.

## Learning More ##

- Review the [Release Notes](https://github.com/unchartedsoftware/influent/blob/master/RELEASE_NOTES.md) to see what's new.
- Read about the complete [installation and configuration procedures](https://github.com/unchartedsoftware/influent/tree/master/docs/src/community/developer-docs/) for custom Influent deployments.
- Examine the configuration of the example applications provided with the source code:
	- [Bitcoin](https://github.com/unchartedsoftware/influent/tree/master/bitcoin/)
	- [Influent App](https://github.com/unchartedsoftware/influent/tree/master/influent-app/)
	- [Kiva](https://github.com/unchartedsoftware/influent/tree/master/kiva/)
	- [Walker](https://github.com/unchartedsoftware/influent/tree/master/walker/).
- Learn how to [deploy](https://github.com/unchartedsoftware/influent/tree/master/docs/src/community/developer-docs/how-to/deployment/) your Influent application to a web server.
- Browse the [User Guide](https://github.com/unchartedsoftware/influent/tree/master/docs/src/docs/userguide/) to understand how to navigate the user interface and investigate your data.

## Contact ##

For support questions, technical suggestions and contributions, please post your feedback to the [GitHub Issues forum](https://github.com/unchartedsoftware/influent/issues) for this project.

## License ##

Influent is under ongoing development and is freely available for download under [The MIT License](http://www.opensource.org/licenses/MIT) (MIT) open source licensing. Unlike GNU General Public License (GPL), MIT freely permits distribution of derivative work under proprietary license, without requiring the release of source code.