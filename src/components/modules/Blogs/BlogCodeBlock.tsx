import { CodeBlock, railscast } from "react-code-blocks";
// nord : Blueish
import "./BlogCodeBlock.css";

interface Props {
  code: string;
  language: string;
  showLineNumbers: boolean;
  highlight: string;
}

const BlogCodeBlock = (props: Props) => {
  return (
    <div className="BlogCodeBlock">
      <CodeBlock
        text={props.code}
        language={props.language}
        showLineNumbers={props.showLineNumbers}
        theme={railscast}
        codeBlock
        highlight={props.highlight}
        wrapLines={true}
      />
    </div>
  );
};

export default BlogCodeBlock;
