/// <reference path="core.d.ts" />
declare namespace gamepad {
	interface QGamepad_ITF extends core.QObject_ITF {
		QGamepad_PTR():QGamepad;
	}

	class QGamepad extends core.QObject {
		___pointer: number;
		QGamepad_PTR():QGamepad;
		Pointer():number;
		SetPointer(p:number):void;
		AxisLeftX():number;
		ConnectAxisLeftXChanged(f:(value:number)=>void):void;
		DisconnectAxisLeftXChanged():void;
		AxisLeftXChanged(value:number):void;
		AxisLeftY():number;
		ConnectAxisLeftYChanged(f:(value:number)=>void):void;
		DisconnectAxisLeftYChanged():void;
		AxisLeftYChanged(value:number):void;
		AxisRightX():number;
		ConnectAxisRightXChanged(f:(value:number)=>void):void;
		DisconnectAxisRightXChanged():void;
		AxisRightXChanged(value:number):void;
		AxisRightY():number;
		ConnectAxisRightYChanged(f:(value:number)=>void):void;
		DisconnectAxisRightYChanged():void;
		AxisRightYChanged(value:number):void;
		ButtonA():boolean;
		ConnectButtonAChanged(f:(value:boolean)=>void):void;
		DisconnectButtonAChanged():void;
		ButtonAChanged(value:boolean):void;
		ButtonB():boolean;
		ConnectButtonBChanged(f:(value:boolean)=>void):void;
		DisconnectButtonBChanged():void;
		ButtonBChanged(value:boolean):void;
		ButtonCenter():boolean;
		ConnectButtonCenterChanged(f:(value:boolean)=>void):void;
		DisconnectButtonCenterChanged():void;
		ButtonCenterChanged(value:boolean):void;
		ButtonDown():boolean;
		ConnectButtonDownChanged(f:(value:boolean)=>void):void;
		DisconnectButtonDownChanged():void;
		ButtonDownChanged(value:boolean):void;
		ButtonGuide():boolean;
		ConnectButtonGuideChanged(f:(value:boolean)=>void):void;
		DisconnectButtonGuideChanged():void;
		ButtonGuideChanged(value:boolean):void;
		ButtonL1():boolean;
		ConnectButtonL1Changed(f:(value:boolean)=>void):void;
		DisconnectButtonL1Changed():void;
		ButtonL1Changed(value:boolean):void;
		ButtonL2():number;
		ConnectButtonL2Changed(f:(value:number)=>void):void;
		DisconnectButtonL2Changed():void;
		ButtonL2Changed(value:number):void;
		ButtonL3():boolean;
		ConnectButtonL3Changed(f:(value:boolean)=>void):void;
		DisconnectButtonL3Changed():void;
		ButtonL3Changed(value:boolean):void;
		ButtonLeft():boolean;
		ConnectButtonLeftChanged(f:(value:boolean)=>void):void;
		DisconnectButtonLeftChanged():void;
		ButtonLeftChanged(value:boolean):void;
		ButtonR1():boolean;
		ConnectButtonR1Changed(f:(value:boolean)=>void):void;
		DisconnectButtonR1Changed():void;
		ButtonR1Changed(value:boolean):void;
		ButtonR2():number;
		ConnectButtonR2Changed(f:(value:number)=>void):void;
		DisconnectButtonR2Changed():void;
		ButtonR2Changed(value:number):void;
		ButtonR3():boolean;
		ConnectButtonR3Changed(f:(value:boolean)=>void):void;
		DisconnectButtonR3Changed():void;
		ButtonR3Changed(value:boolean):void;
		ButtonRight():boolean;
		ConnectButtonRightChanged(f:(value:boolean)=>void):void;
		DisconnectButtonRightChanged():void;
		ButtonRightChanged(value:boolean):void;
		ButtonSelect():boolean;
		ConnectButtonSelectChanged(f:(value:boolean)=>void):void;
		DisconnectButtonSelectChanged():void;
		ButtonSelectChanged(value:boolean):void;
		ButtonStart():boolean;
		ConnectButtonStartChanged(f:(value:boolean)=>void):void;
		DisconnectButtonStartChanged():void;
		ButtonStartChanged(value:boolean):void;
		ButtonUp():boolean;
		ConnectButtonUpChanged(f:(value:boolean)=>void):void;
		DisconnectButtonUpChanged():void;
		ButtonUpChanged(value:boolean):void;
		ButtonX():boolean;
		ConnectButtonXChanged(f:(value:boolean)=>void):void;
		DisconnectButtonXChanged():void;
		ButtonXChanged(value:boolean):void;
		ButtonY():boolean;
		ConnectButtonYChanged(f:(value:boolean)=>void):void;
		DisconnectButtonYChanged():void;
		ButtonYChanged(value:boolean):void;
		ConnectConnectedChanged(f:(value:boolean)=>void):void;
		DisconnectConnectedChanged():void;
		ConnectedChanged(value:boolean):void;
		DeviceId():number;
		ConnectDeviceIdChanged(f:(value:number)=>void):void;
		DisconnectDeviceIdChanged():void;
		DeviceIdChanged(value:number):void;
		IsConnected():boolean;
		Name():string;
		ConnectNameChanged(f:(value:string)=>void):void;
		DisconnectNameChanged():void;
		NameChanged(value:string):void;
		ConnectSetDeviceId(f:(number:number)=>void):void;
		DisconnectSetDeviceId():void;
		SetDeviceId(number:number):void;
		SetDeviceIdDefault(number:number):void;
		ChildEventDefault(event:core.QChildEvent_ITF):void;
		ConnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		CustomEventDefault(event:core.QEvent_ITF):void;
		DeleteLaterDefault():void;
		DisconnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		EventDefault(e:core.QEvent_ITF):boolean;
		EventFilterDefault(watched:core.QObject_ITF,event:core.QEvent_ITF):boolean;
		MetaObjectDefault():core.QMetaObject;
		TimerEventDefault(event:core.QTimerEvent_ITF):void;
	}
	function NewQGamepadFromPointer(ptr:number):QGamepad;
	function NewQGamepad(deviceId:number,parent:core.QObject_ITF):QGamepad;
	function NewQGamepadKeyNavigation(parent:core.QObject_ITF):QGamepadKeyNavigation;
	interface QGamepadKeyNavigation_ITF extends core.QObject_ITF {
		QGamepadKeyNavigation_PTR():QGamepadKeyNavigation;
	}

	class QGamepadKeyNavigation extends core.QObject {
		___pointer: number;
		QGamepadKeyNavigation_PTR():QGamepadKeyNavigation;
		Pointer():number;
		SetPointer(p:number):void;
		Active():boolean;
		ConnectActiveChanged(f:(isActive:boolean)=>void):void;
		DisconnectActiveChanged():void;
		ActiveChanged(isActive:boolean):void;
		ButtonAKey():number;
		ConnectButtonAKeyChanged(f:(key:number)=>void):void;
		DisconnectButtonAKeyChanged():void;
		ButtonAKeyChanged(key:number):void;
		ButtonBKey():number;
		ConnectButtonBKeyChanged(f:(key:number)=>void):void;
		DisconnectButtonBKeyChanged():void;
		ButtonBKeyChanged(key:number):void;
		ButtonGuideKey():number;
		ConnectButtonGuideKeyChanged(f:(key:number)=>void):void;
		DisconnectButtonGuideKeyChanged():void;
		ButtonGuideKeyChanged(key:number):void;
		ButtonL1Key():number;
		ConnectButtonL1KeyChanged(f:(key:number)=>void):void;
		DisconnectButtonL1KeyChanged():void;
		ButtonL1KeyChanged(key:number):void;
		ButtonL2Key():number;
		ConnectButtonL2KeyChanged(f:(key:number)=>void):void;
		DisconnectButtonL2KeyChanged():void;
		ButtonL2KeyChanged(key:number):void;
		ButtonL3Key():number;
		ConnectButtonL3KeyChanged(f:(key:number)=>void):void;
		DisconnectButtonL3KeyChanged():void;
		ButtonL3KeyChanged(key:number):void;
		ButtonR1Key():number;
		ConnectButtonR1KeyChanged(f:(key:number)=>void):void;
		DisconnectButtonR1KeyChanged():void;
		ButtonR1KeyChanged(key:number):void;
		ButtonR2Key():number;
		ConnectButtonR2KeyChanged(f:(key:number)=>void):void;
		DisconnectButtonR2KeyChanged():void;
		ButtonR2KeyChanged(key:number):void;
		ButtonR3Key():number;
		ConnectButtonR3KeyChanged(f:(key:number)=>void):void;
		DisconnectButtonR3KeyChanged():void;
		ButtonR3KeyChanged(key:number):void;
		ButtonSelectKey():number;
		ConnectButtonSelectKeyChanged(f:(key:number)=>void):void;
		DisconnectButtonSelectKeyChanged():void;
		ButtonSelectKeyChanged(key:number):void;
		ButtonStartKey():number;
		ConnectButtonStartKeyChanged(f:(key:number)=>void):void;
		DisconnectButtonStartKeyChanged():void;
		ButtonStartKeyChanged(key:number):void;
		ButtonXKey():number;
		ConnectButtonXKeyChanged(f:(key:number)=>void):void;
		DisconnectButtonXKeyChanged():void;
		ButtonXKeyChanged(key:number):void;
		ButtonYKey():number;
		ConnectButtonYKeyChanged(f:(key:number)=>void):void;
		DisconnectButtonYKeyChanged():void;
		ButtonYKeyChanged(key:number):void;
		DownKey():number;
		ConnectDownKeyChanged(f:(key:number)=>void):void;
		DisconnectDownKeyChanged():void;
		DownKeyChanged(key:number):void;
		Gamepad():QGamepad;
		ConnectGamepadChanged(f:(gamepad:QGamepad)=>void):void;
		DisconnectGamepadChanged():void;
		GamepadChanged(gamepad:QGamepad_ITF):void;
		LeftKey():number;
		ConnectLeftKeyChanged(f:(key:number)=>void):void;
		DisconnectLeftKeyChanged():void;
		LeftKeyChanged(key:number):void;
		RightKey():number;
		ConnectRightKeyChanged(f:(key:number)=>void):void;
		DisconnectRightKeyChanged():void;
		RightKeyChanged(key:number):void;
		ConnectSetActive(f:(isActive:boolean)=>void):void;
		DisconnectSetActive():void;
		SetActive(isActive:boolean):void;
		SetActiveDefault(isActive:boolean):void;
		ConnectSetButtonAKey(f:(key:number)=>void):void;
		DisconnectSetButtonAKey():void;
		SetButtonAKey(key:number):void;
		SetButtonAKeyDefault(key:number):void;
		ConnectSetButtonBKey(f:(key:number)=>void):void;
		DisconnectSetButtonBKey():void;
		SetButtonBKey(key:number):void;
		SetButtonBKeyDefault(key:number):void;
		ConnectSetButtonGuideKey(f:(key:number)=>void):void;
		DisconnectSetButtonGuideKey():void;
		SetButtonGuideKey(key:number):void;
		SetButtonGuideKeyDefault(key:number):void;
		ConnectSetButtonL1Key(f:(key:number)=>void):void;
		DisconnectSetButtonL1Key():void;
		SetButtonL1Key(key:number):void;
		SetButtonL1KeyDefault(key:number):void;
		ConnectSetButtonL2Key(f:(key:number)=>void):void;
		DisconnectSetButtonL2Key():void;
		SetButtonL2Key(key:number):void;
		SetButtonL2KeyDefault(key:number):void;
		ConnectSetButtonL3Key(f:(key:number)=>void):void;
		DisconnectSetButtonL3Key():void;
		SetButtonL3Key(key:number):void;
		SetButtonL3KeyDefault(key:number):void;
		ConnectSetButtonR1Key(f:(key:number)=>void):void;
		DisconnectSetButtonR1Key():void;
		SetButtonR1Key(key:number):void;
		SetButtonR1KeyDefault(key:number):void;
		ConnectSetButtonR2Key(f:(key:number)=>void):void;
		DisconnectSetButtonR2Key():void;
		SetButtonR2Key(key:number):void;
		SetButtonR2KeyDefault(key:number):void;
		ConnectSetButtonR3Key(f:(key:number)=>void):void;
		DisconnectSetButtonR3Key():void;
		SetButtonR3Key(key:number):void;
		SetButtonR3KeyDefault(key:number):void;
		ConnectSetButtonSelectKey(f:(key:number)=>void):void;
		DisconnectSetButtonSelectKey():void;
		SetButtonSelectKey(key:number):void;
		SetButtonSelectKeyDefault(key:number):void;
		ConnectSetButtonStartKey(f:(key:number)=>void):void;
		DisconnectSetButtonStartKey():void;
		SetButtonStartKey(key:number):void;
		SetButtonStartKeyDefault(key:number):void;
		ConnectSetButtonXKey(f:(key:number)=>void):void;
		DisconnectSetButtonXKey():void;
		SetButtonXKey(key:number):void;
		SetButtonXKeyDefault(key:number):void;
		ConnectSetButtonYKey(f:(key:number)=>void):void;
		DisconnectSetButtonYKey():void;
		SetButtonYKey(key:number):void;
		SetButtonYKeyDefault(key:number):void;
		ConnectSetDownKey(f:(key:number)=>void):void;
		DisconnectSetDownKey():void;
		SetDownKey(key:number):void;
		SetDownKeyDefault(key:number):void;
		ConnectSetGamepad(f:(gamepad:QGamepad)=>void):void;
		DisconnectSetGamepad():void;
		SetGamepad(gamepad:QGamepad_ITF):void;
		SetGamepadDefault(gamepad:QGamepad_ITF):void;
		ConnectSetLeftKey(f:(key:number)=>void):void;
		DisconnectSetLeftKey():void;
		SetLeftKey(key:number):void;
		SetLeftKeyDefault(key:number):void;
		ConnectSetRightKey(f:(key:number)=>void):void;
		DisconnectSetRightKey():void;
		SetRightKey(key:number):void;
		SetRightKeyDefault(key:number):void;
		ConnectSetUpKey(f:(key:number)=>void):void;
		DisconnectSetUpKey():void;
		SetUpKey(key:number):void;
		SetUpKeyDefault(key:number):void;
		UpKey():number;
		ConnectUpKeyChanged(f:(key:number)=>void):void;
		DisconnectUpKeyChanged():void;
		UpKeyChanged(key:number):void;
		ChildEventDefault(event:core.QChildEvent_ITF):void;
		ConnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		CustomEventDefault(event:core.QEvent_ITF):void;
		DeleteLaterDefault():void;
		DisconnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		EventDefault(e:core.QEvent_ITF):boolean;
		EventFilterDefault(watched:core.QObject_ITF,event:core.QEvent_ITF):boolean;
		MetaObjectDefault():core.QMetaObject;
		TimerEventDefault(event:core.QTimerEvent_ITF):void;
	}
	function NewQGamepadKeyNavigationFromPointer(ptr:number):QGamepadKeyNavigation;
	function NewQGamepadKeyNavigation(parent:core.QObject_ITF):QGamepadKeyNavigation;
	interface QGamepadManager_ITF extends core.QObject_ITF {
		QGamepadManager_PTR():QGamepadManager;
	}

	class QGamepadManager extends core.QObject {
		___pointer: number;
		QGamepadManager_PTR():QGamepadManager;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectedGamepads():number[];
		ConnectConnectedGamepadsChanged(f:()=>void):void;
		DisconnectConnectedGamepadsChanged():void;
		ConnectedGamepadsChanged():void;
		GamepadName(deviceId:number):string;
		Instance():QGamepadManager;
		ConnectIsConfigurationNeeded(f:(deviceId:number)=>boolean):void;
		DisconnectIsConfigurationNeeded():void;
		IsConfigurationNeeded(deviceId:number):boolean;
		IsConfigurationNeededDefault(deviceId:number):boolean;
		IsGamepadConnected(deviceId:number):boolean;
		ConnectResetConfiguration(f:(deviceId:number)=>void):void;
		DisconnectResetConfiguration():void;
		ResetConfiguration(deviceId:number):void;
		ResetConfigurationDefault(deviceId:number):void;
		ConnectSetSettingsFile(f:(file:string)=>void):void;
		DisconnectSetSettingsFile():void;
		SetSettingsFile(file:string):void;
		SetSettingsFileDefault(file:string):void;
		ChildEventDefault(event:core.QChildEvent_ITF):void;
		ConnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		CustomEventDefault(event:core.QEvent_ITF):void;
		DeleteLaterDefault():void;
		DisconnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		EventDefault(e:core.QEvent_ITF):boolean;
		EventFilterDefault(watched:core.QObject_ITF,event:core.QEvent_ITF):boolean;
		MetaObjectDefault():core.QMetaObject;
		TimerEventDefault(event:core.QTimerEvent_ITF):void;
	}
	function NewQGamepadManagerFromPointer(ptr:number):QGamepadManager;
	function QGamepadManager_Instance():QGamepadManager;
}