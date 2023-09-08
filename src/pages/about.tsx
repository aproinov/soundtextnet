import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import { ShareList } from "../components/ShareList";
import config from "../lib/config";

export default function Index() {
    return (
        <Layout>
            <BasicMeta url={"/"} />
            <OpenGraphMeta url={"/"} />
            <TwitterCardMeta url={"/"} />
            <div className="container">
                <div>
                    <h1>
                        About <span className="fancy">{config.site_title}</span>
                    </h1>
                    <span className="handle">Tentang Kami</span>

                    <p>Soundoftext merupakan tempat Anda beristirahat sejenak dari penatnya kehidupan di era digital.
                        Kami rangkum tulisan terbaik dan mencerahkan sebagai sumber informasi perihal tutorial dan
                        penggunaan aplikasi text to speech terkini.</p>

                    <p>Seiring dengan massive nya perkembangan teknologi, kamu menyadari mungkin ada beberapa
                        panduan yang kurang akurat, oleh karenanya, kami selalu menanti kontribusi serta kritik dan
                        saran Anda untuk kemajuan Blog Teknosia.</p>

                    <p>Untuk menghubungi tim kami, Anda dapat mengirimkan surat elektronik ke alamat
                        techblog[at]pm.me atau mengunjungi langsung situs <a href="https://www.voiceoftext.com/p/sound-of-text-wa.html">sound of text</a>.</p>

                    <ShareList url={`/`} text={config.site_title} />
                </div>
            </div>
            <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1 1 auto;
          padding: 0 1.5rem;
          max-width: 800px;
          margin: 0 auto;
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
        p {
            line-height: 1.75rem;
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
        </Layout>
    );
}
