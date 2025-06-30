import Icon from '../ui/Icon'
import IconLink from '../ui/IconLink'

export default function SocialLinks() {
    return (
        <div className="social-links">
            <IconLink
                href="https://github.com/maycheongs"
                icon={<Icon name="github" size={20} />}
                label="GitHub Profile"
                external
            />
            <IconLink
                href="https://linkedin.com/in/maycheongsl"
                icon={<Icon name="linkedin" size={20} />}
                label="LinkedIn Profile"
                external
            />
            <IconLink
                href="mailto:maycheongs@gmail.com"
                icon={<Icon name="mail" size={20} />}
                label="Send Email"
            />
        </div>

    )
}