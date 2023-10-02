import { GetStaticProps } from "next";
import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import { ShareList } from "../components/ShareList";
import PostList from "../components/HomePostList";
import config from "../lib/config";
import { countPosts, listPostContent, PostContent } from "../lib/posts";
import { listTags, TagContent } from "../lib/tags";
import Head from "next/head";

type Props = {
  posts: PostContent[];
  tags: TagContent[];
  pagination: {
    current: number;
    pages: number;
  };
};

export default function Index({ posts, tags, pagination }: Props) {
  const url = "/posts";
  const title = "All posts";
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <div className="container">
        <div>
          <h1>
            Welcome on <span className="fancy">{config.site_title}</span>
          </h1>
          <span className="handle">{config.twitter_account}</span>
          <h2>Another Blog by Google text to speech engine enthusiast</h2>
              <h2>Introduction to Text-to-Speech (TTS) Technology</h2>
    <p>Text-to-Speech (TTS) technology is a revolutionary advancement that allows text to be converted into spoken words. This technology has found applications in various fields, from accessibility features for the visually impaired to enhancing user experiences in virtual assistants and audiobooks.</p>

    <h2>Anime and TTS</h2>
    <p>The intersection of TTS technology and anime is an intriguing one. Anime enthusiasts and content creators often seek ways to generate authentic anime character voices using TTS, which has led to the emergence of tools and websites like <a href="https://www.soundoftext.com">Sound of Text</a>.</p>

    <h2>Sound of Text Website</h2>
    <p>"Sound of Text" is a user-friendly online tool that provides a simple and effective way to generate text-to-speech audio. Users can access this tool at <a href="https://www.soundoftext.com">www.soundoftext.com</a>. It has gained popularity among anime fans for its ability to create custom anime character voices.</p>

    <h2>How to Use "Sound of Text" for Anime</h2>
    <p>Let's dive into how you can use "Sound of Text" to bring your favorite anime characters to life:</p>
    <ol>
        <li><strong>Access the Website:</strong> Start by visiting <a href="https://www.soundoftext.com">www.soundoftext.com</a>.</li> or <a href="https://www.voiceoftext.com/p/sound-of-text-wa.html">sound of text wa</a>a>
        <li><strong>Input Your Text:</strong> On the website, you'll find a text box where you can enter the dialogue or text you want to convert into speech.</li>
        <li><strong>Select a Language and Voice:</strong> "Sound of Text" offers a variety of languages and voices to choose from. Pick the one that best suits your anime character.</li>
        <li><strong>Generate the Audio:</strong> Click the "Generate mp3" button, and within seconds, you'll have a downloadable audio file of your text in the chosen voice.</li>
        <li><strong>Fine-Tune Your Creation:</strong> If necessary, you can further adjust the generated voice to better match your anime character's personality and tone.</li>
    </ol>

    <h2>Customization Options</h2>
    <p>"Sound of Text" provides several customization options to enhance your experience. You can experiment with different voices, accents, and languages to create the perfect anime character voice.</p>

    <h2>Sample Creations</h2>
    <p>To illustrate the capabilities of "Sound of Text," here are some examples of text-to-speech creations related to anime characters:</p>
    <ul>
        <li><a href="../src/assets/wa_masuk_id.mp3">MP3 1:</a> WhatsApp Ringtone.</li>
        <li><a href="../src/assets/nama_sayang.mp3">mp3 2:</a> WA Caller Name.</li>
    </ul>

    <p>These examples showcase the versatility and quality of voice generation using "Sound of Text."</p>

    <h2>Alternatives and Competing Tools</h2>
    <p>While "Sound of Text" is a fantastic tool, it's not the only option available for anime voice generation. You might also consider alternatives like <a href="https://www.toolx.com">Tool X</a> or <a href="https://www.websitey.com">Website Y</a>, each with its unique features and capabilities.</p>

    <h2>Tips and Best Practices</h2>
    <p>To get the best results when using "Sound of Text" or any TTS tool for anime voice generation, consider these tips:</p>
    <ul>
        <li>Experiment with different voices and settings to find the perfect match.</li>
        <li>Pay attention to pronunciation and pacing for authenticity.</li>
        <li>Edit the generated audio if necessary to achieve the desired effect.</li>
    </ul>

    <h2>Legal Considerations</h2>
    <p>It's crucial to respect copyright and intellectual property rights when using TTS for anime purposes. Ensure that your creations do not infringe on any copyrights or licenses associated with the original content.</p>

    <h2>User Reviews and Experiences</h2>
    <p>The "Sound of Text" community has shared their experiences with the tool, showcasing how they've used it to create engaging anime content. Many users have praised its ease of use and the quality of the generated voices.</p>

    <h2>Conclusion</h2>
    <p>"Sound of Text" offers an exciting and accessible way for anime enthusiasts to experiment with text-to-speech technology and create unique anime character voices. Whether you're a content creator or just a fan looking to have fun, this tool opens up a world of creative possibilities.</p>

    <p>Give "Sound of Text" a try, explore the wide range of voices and languages it offers, and start bringing your favorite anime characters to life in your own unique way.</p>

    <h2>Additional Resources</h2>
    <p>For more information on anime voice generation, consider checking out these resources:</p>
    <ul>
        <li><a href="https://soundtext.github.io/how-to-use-fakeyou/">Anime Voice Generation Forum</a>: Connect with like-minded enthusiasts and share your creations.</li>
        <li><a href="https://soundoftext.netlify.app/posts/audio-from-text">Text-to-Speech Technology Explained</a>: A comprehensive guide to understanding TTS technology and its applications.</li>
    </ul>

    <p>Now, you're ready to embark on your anime voice generation journey with "Sound of Text." Have fun experimenting and creating!</p>

          <ShareList url={`/`} text={config.site_title} />
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1 1 auto;
          padding: 0 1.5rem 20px 1.5rem;
          max-width: 800px;
          margin: 0 auto 20px auto;
          border-bottom: 1px solid #ddd;
        }
        h1 {
          font-size: 2.5rem;
          margin: 0;
          font-weight: 500;
        }
        h2 {
          font-size: 1.75rem;
          font-weight: 400;
          line-height: 1.25;
        }
        .fancy {
          color: #15847d;
        }
        .handle {
          display: inline-block;
          margin-top: 0.275em;
          color: #9b9b9b;
          letter-spacing: 0.05em;
        }

        @media (min-width: 769px) {
          h1 {
            font-size: 3rem;
          }
          h2 {
            font-size: 2.25rem;
          }
        }
      `}</style>
      <PostList posts={posts} tags={tags} pagination={pagination} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = listPostContent(1, config.posts_per_page);
  const tags = listTags();
  const pagination = {
    current: 1,
    pages: 1,
  };
  return {
    props: {
      posts,
      tags,
      pagination,
    },
  };
};
