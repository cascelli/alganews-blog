import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

interface MarkdownProps {
  //   children: React.ReactNode;
  children: string;
}

export default function Markdown(props: MarkdownProps) {
  //   return <div>{props.children}</div>;
  return (
    <ReactMarkdown className={"MarkdownRenderer"} plugins={[gfm]}>
      {props.children}
    </ReactMarkdown>
  );
}
