import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TelegramShareButton,
  TelegramIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from 'next-share';
import { ShareNetworksProps } from './Share.types';
import clsx from 'clsx';

export const ShareNetworks = ({
  networks,
  url,
  quote,
  tags = ['#uepm'],
  className,
}: ShareNetworksProps) => {
  return (
    <div
      className={clsx(
        'flex justify-center items-center gap-2 sm:gap-4',
        className,
      )}
    >
      {networks.includes('whatsapp') && (
        <WhatsappShareButton url={url} title={quote} separator=":: ">
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
      )}
      {networks.includes('telegram') && (
        <TelegramShareButton url={url} title={quote}>
          <TelegramIcon size={32} round />
        </TelegramShareButton>
      )}
      {networks.includes('facebook') && (
        <FacebookShareButton url={url} quote={quote} hashtag={tags[0]}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>
      )}
      {networks.includes('twitter') && (
        <TwitterShareButton url={url} title={quote} hashtags={tags}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>
      )}
      {networks.includes('linkedin') && (
        <LinkedinShareButton url={url}>
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
      )}
      {networks.includes('email') && (
        <EmailShareButton url={url} subject={quote}>
          <EmailIcon size={32} round />
        </EmailShareButton>
      )}
    </div>
  );
};
