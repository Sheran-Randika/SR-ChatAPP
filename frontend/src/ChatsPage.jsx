import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced';

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        '97ad0c80-f567-4973-a0cb-cc23eeaa8ebb', 
        props.user.username, props.user.secret
    );
    return (
    <div style={{ height: "100vh" }}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps} style={{ height: '100%' }} />
    </div>
    )

}

export default ChatsPage;