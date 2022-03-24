import ReactMarkdown from "react-markdown";

interface MarkdownProps {
  //   children: React.ReactNode;
  children: string;
}

export default function Markdown(props: MarkdownProps) {
  //   return <div>{props.children}</div>;
  return (
    <ReactMarkdown className={"MarkdownRenderer"}>
      {props.children}
    </ReactMarkdown>
  );
}
