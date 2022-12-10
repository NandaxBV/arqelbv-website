import { AiFillLinkedin, AiFillMail, AiFillPhone } from 'react-icons/ai';


export default {
    about: {
        description: [
            'Arqel B.V. is based in The Netherlands and was founded in June 2022. As an entity, Arqel B.V. acts as a holding company for additional subsidiary companies and therefore has no physical address.',
            'Click on the picture next to this paragraph to learn more about Thijmen Maus—Arqel B.V.’s founder.'
        ]
    },
    operations: [
        {
            image: '/assets/operations/arqelbv.jpeg',
            name: 'Arqel B.V.',
            description: 'Holding Company',
            href: '#'
        },
        {
            image: '/assets/operations/nandaxbv.jpeg',
            name: 'Nandax B.V.',
            description: 'Software Company',
            href: 'https://nandax.com'
        }
    ],
    contact: [
        { icon: AiFillPhone, text: 'KzMxIDYgODEwMiAxODU4', encoded: true },
        { icon: AiFillMail, text: 'aW5mb0BhcnFlbC5jb20=', encoded: true },
        { icon: AiFillLinkedin, text: 'LinkedIn', href: 'https://www.linkedin.com/company/arqel/' }
    ]
};
