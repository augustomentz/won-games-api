/*
 *
 * HomePage
 *
 */
/* eslint-disable */
import React, { memo } from "react";
import { FormattedMessage } from "react-intl";
import PageTitle from "../../components/PageTitle";
import {
  ALink,
  Block,
  Container,
  LinkWrapper,
  P,
  Separator,
  Wave,
} from "./components";

const FIRST_BLOCK_LINKS = [
  {
    link:
      "https://strapi.io/documentation/v3.x/getting-started/quick-start.html#_4-create-a-category-content-type",
    contentId: "app.components.BlockLink.documentation.content",
    titleId: "app.components.BlockLink.documentation",
  },
  {
    link: "https://github.com/strapi/foodadvisor",
    contentId: "app.components.BlockLink.code.content",
    titleId: "app.components.BlockLink.code",
  },
];

const HomePage = ({ global: { plugins }, history: { push } }) => {
  return (
    <>
      <FormattedMessage id="HomePage.helmet.title">
        {(title) => <PageTitle title={title} />}
      </FormattedMessage>
      <Container className="container-fluid">
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <Block>
              <Wave />
              <h2 id="mainHeader">Welcome to Won Games!</h2>
              <P>
                At the side you can insert differents games, categories and
                publishers to our wonderful game store!{" "}
              </P>
              <Separator style={{ marginTop: 37, marginBottom: 36 }} />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                {FIRST_BLOCK_LINKS.map((data, index) => {
                  const type = index === 0 ? "doc" : "code";

                  return (
                    <LinkWrapper
                      href={data.link}
                      target="_blank"
                      key={data.link}
                      type={type}
                    >
                      <FormattedMessage id={data.titleId}>
                        {(title) => <p className="bold">{title}</p>}
                      </FormattedMessage>
                      <FormattedMessage id={data.contentId}>
                        {(content) => <p>{content}</p>}
                      </FormattedMessage>
                    </LinkWrapper>
                  );
                })}
              </div>
            </Block>
          </div>

          <div className="col-md-12 col-lg-4">
            <Block style={{ paddingRight: 30, paddingBottom: 0 }}>
              <h2>See our content!</h2>
              <FormattedMessage id="app.components.HomePage.community.content">
                {(content) => (
                  <P style={{ marginTop: 7, marginBottom: 0 }}>
                    In case of doubts and suggestions, watch our link =)
                  </P>
                )}
              </FormattedMessage>
              <ALink
                rel="noopener noreferrer"
                href="https://reactavancado.com.br"
                target="_blank"
              >
                See our modules planning
              </ALink>
            </Block>
          </div>
        </div>
      </Container>
    </>
  );
};

export default memo(HomePage);
