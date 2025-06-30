import Icon from '../ui/Icon'
import IconLink from '../ui/IconLink'

const github = import.meta.env.PUBLIC_GITHUB_URL
const linkedin = import.meta.env.PUBLIC_LINKEDIN_URL
const email = import.meta.env.PUBLIC_EMAIL

export default function SocialLinks() {
    return (
        <div className="social-links">
            <IconLink
                href={github}
                icon={<Icon name="github" size={20} />}
                label="GitHub Profile"
                external
            />
            <IconLink
                href={linkedin}
                icon={<Icon name="linkedin" size={20} />}
                label="LinkedIn Profile"
                external
            />
            <IconLink
                href={`mailto:${email}`}
                icon={<Icon name="mail" size={20} />}
                label="Send Email"
            />
        </div>

    )
}