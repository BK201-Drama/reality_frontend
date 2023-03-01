import { useAntdTable } from 'ahooks';
import { Form } from 'antd';
import { FC } from 'react';
import { getAllUserInfo } from '../../domains/Login/reposity';
import RFormHeader from '../../shared/RFormHeader';
import RTable from '../../shared/RTable';
import getTableData from '../../shared/utils/tableApi';

interface IProps {
  columns: any[];
  formConfigs: any[];
  other: (refresh: any) => any;
}
const PeopleMsgComponent: FC<IProps> = ({ columns, formConfigs, other }) => {
  const [formInstance] = Form.useForm();
  const { tableProps, search, refresh } = useAntdTable(
    getTableData(getAllUserInfo),
    {
      form: formInstance,
    },
  );
  const { submit, reset } = search;
  return (
    <>
      <RFormHeader
        formInstance={formInstance}
        reset={reset}
        submit={submit}
        formConfig={formConfigs}
      />
      <div className='flex gap-[5px] flex-col justify-center items-center'>
        <RTable tableProps={tableProps} columns={columns} rowKey='id' />
        {other?.(refresh)}
      </div>
    </>
  );
};

export default PeopleMsgComponent;
