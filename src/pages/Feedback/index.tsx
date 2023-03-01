import { Button, Form, Input, message, Select } from 'antd';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { useStores } from '../../core/stores';
import { feedBack } from '../../domains/feedBack/reposity';
import { getUserInfo } from '../../domains/Login/reposity';

const { Item } = Form;

const FeedBack = () => {
  const { userStore } = useStores();
  useEffect(() => {
    if (!userStore.roomList?.length) {
      const params = {
        pageNum: 1,
        pageSize: 10,
        id: userStore.id,
      };
      getUserInfo(params).then((res: any) => {
        const {
          data: {
            data: {
              id,
              userName,
              userBalance,
              userRealName,
              roomPageInfo: { list },
            },
          },
        } = res;
        userStore.setUserMessage({
          id,
          userName,
          userBalance,
          userRealName,
          roomList: list,
        });
      });
    }
  }, []);
  const finish = (e: { feedback?: string }) => {
    feedBack({
      ...e,
      userId: userStore.id,
    }).then(() => {
      message.success('反馈成功');
    });
  };
  return (
    <div className='bg-[#fff] m-[20px] p-[15px] flex flex-col gap-[10px] rounded-[8px]'>
      <h2>我要反馈</h2>
      <div className='flex gap-[5px] flex-col justify-center items-center'>
        <Form
          onFinish={finish}
          className='w-[800px] justify-center flex flex-col'>
          <Item name='roomId' label='请选择要反馈的房间号'>
            <Select
              options={userStore.roomList?.map((item) => ({
                label: item.roomNumber,
                value: item.id,
              }))}
            />
          </Item>
          <Item name='feedback' label='请输入反馈'>
            <Input.TextArea />
          </Item>
          <Item>
            <Button htmlType='submit'>提交反馈</Button>
          </Item>
        </Form>
      </div>
    </div>
  );
};

export default observer(FeedBack);
