import classNames from "classnames";
import Link from "next/link";
import React from "react";

import Anchor from "../../logic/anchor";

interface TextLinkProps {
  readonly href: string;
  readonly isExternal?: boolean;
  readonly hasUnderline?: boolean;
  readonly children: React.ReactNode;
}

const TextLink: React.FunctionComponent<TextLinkProps> = ({
  href,
  isExternal = false,
  hasUnderline = true,
  children,
}: TextLinkProps) => (
  <span
    className={classNames(
      "hover:opacity-70 transition-all not-prose",
      hasUnderline ? "underline" : ""
    )}
  >
    <Link href={href} passHref>
      <Anchor shouldOpenInNewPage={isExternal}>{children}</Anchor>
    </Link>
  </span>
);

export default TextLink;
