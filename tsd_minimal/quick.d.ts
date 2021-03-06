/// <reference path="core.d.ts" />
/// <reference path="gui.d.ts" />
/// <reference path="widgets.d.ts" />
/// <reference path="qml.d.ts" />
declare namespace quick {
	interface QQuickItem_ITF extends qml.QQmlParserStatus_ITF {
		QQuickItem_PTR():QQuickItem;
		QObject_PTR():core.QObject;
	}

	class QQuickItem extends qml.QQmlParserStatus {
		QObject_PTR():core.QObject
		___pointer: number;
		QQuickItem_PTR():QQuickItem;
		Pointer():number;
		SetPointer(p:number):void;
		ConnectContains(f:(point:core.QPointF)=>boolean):void;
		DisconnectContains():void;
		Contains(point:core.QPointF_ITF):boolean;
		ContainsDefault(point:core.QPointF_ITF):boolean;
		Cursor():gui.QCursor;
		ConnectDragEnterEvent(f:(event:gui.QDragEnterEvent)=>void):void;
		DisconnectDragEnterEvent():void;
		DragEnterEvent(event:gui.QDragEnterEvent_ITF):void;
		DragEnterEventDefault(event:gui.QDragEnterEvent_ITF):void;
		ConnectDragLeaveEvent(f:(event:gui.QDragLeaveEvent)=>void):void;
		DisconnectDragLeaveEvent():void;
		DragLeaveEvent(event:gui.QDragLeaveEvent_ITF):void;
		DragLeaveEventDefault(event:gui.QDragLeaveEvent_ITF):void;
		ConnectDragMoveEvent(f:(event:gui.QDragMoveEvent)=>void):void;
		DisconnectDragMoveEvent():void;
		DragMoveEvent(event:gui.QDragMoveEvent_ITF):void;
		DragMoveEventDefault(event:gui.QDragMoveEvent_ITF):void;
		ConnectDropEvent(f:(event:gui.QDropEvent)=>void):void;
		DisconnectDropEvent():void;
		DropEvent(event:gui.QDropEvent_ITF):void;
		DropEventDefault(event:gui.QDropEvent_ITF):void;
		ConnectEvent(f:(ev:core.QEvent)=>boolean):void;
		DisconnectEvent():void;
		Event(ev:core.QEvent_ITF):boolean;
		EventDefault(ev:core.QEvent_ITF):boolean;
		Flags():number;
		Height():number;
		IsEnabled():boolean;
		MapToGlobal(point:core.QPointF_ITF):core.QPointF;
		ConnectMouseMoveEvent(f:(event:gui.QMouseEvent)=>void):void;
		DisconnectMouseMoveEvent():void;
		MouseMoveEvent(event:gui.QMouseEvent_ITF):void;
		MouseMoveEventDefault(event:gui.QMouseEvent_ITF):void;
		ConnectMousePressEvent(f:(event:gui.QMouseEvent)=>void):void;
		DisconnectMousePressEvent():void;
		MousePressEvent(event:gui.QMouseEvent_ITF):void;
		MousePressEventDefault(event:gui.QMouseEvent_ITF):void;
		ParentItem():QQuickItem;
		Rotation():number;
		Scale():number;
		SetCursor(cursor:gui.QCursor_ITF):void;
		SetEnabled(vbo:boolean):void;
		SetFlag(flag:number,enabled:boolean):void;
		SetFlags(flags:number):void;
		SetParentItem(parent:QQuickItem_ITF):void;
		SetRotation(vqr:number):void;
		SetSize(size:core.QSizeF_ITF):void;
		SetVisible(vbo:boolean):void;
		SetX(vqr:number):void;
		SetY(vqr:number):void;
		Size():core.QSizeF;
		Smooth():boolean;
		State():string;
		ConnectStateChanged(f:(vqs:string)=>void):void;
		DisconnectStateChanged():void;
		StateChanged(vqs:string):void;
		ConnectUpdate(f:()=>void):void;
		DisconnectUpdate():void;
		Update():void;
		UpdateDefault():void;
		Width():number;
		Window():QQuickWindow;
		X():number;
		Y():number;
		Z():number;
		ConnectDestroyQQuickItem(f:()=>void):void;
		DisconnectDestroyQQuickItem():void;
		DestroyQQuickItem():void;
		DestroyQQuickItemDefault():void;
		ChildEvent(event:core.QChildEvent_ITF):void;
		ChildEventDefault(event:core.QChildEvent_ITF):void;
		ConnectNotify(sign:core.QMetaMethod_ITF):void;
		ConnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		CustomEvent(event:core.QEvent_ITF):void;
		CustomEventDefault(event:core.QEvent_ITF):void;
		DeleteLater():void;
		DeleteLaterDefault():void;
		DisconnectNotify(sign:core.QMetaMethod_ITF):void;
		DisconnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		EventFilter(watched:core.QObject_ITF,event:core.QEvent_ITF):boolean;
		EventFilterDefault(watched:core.QObject_ITF,event:core.QEvent_ITF):boolean;
		TimerEvent(event:core.QTimerEvent_ITF):void;
		TimerEventDefault(event:core.QTimerEvent_ITF):void;
		ClassBegin():void;
		ClassBeginDefault():void;
		ComponentComplete():void;
		ComponentCompleteDefault():void;
	}
	function NewQQuickItemFromPointer(ptr:number):QQuickItem;
	function NewQQuickItem(parent:QQuickItem_ITF):QQuickItem;
	const QQuickItem__ItemClipsChildrenToShape: number;
	const QQuickItem__ItemAcceptsInputMethod: number;
	const QQuickItem__ItemIsFocusScope: number;
	const QQuickItem__ItemHasContents: number;
	const QQuickItem__ItemAcceptsDrops: number;
	const QQuickItem__ItemChildAddedChange: number;
	const QQuickItem__ItemChildRemovedChange: number;
	const QQuickItem__ItemSceneChange: number;
	const QQuickItem__ItemVisibleHasChanged: number;
	const QQuickItem__ItemParentHasChanged: number;
	const QQuickItem__ItemOpacityHasChanged: number;
	const QQuickItem__ItemActiveFocusHasChanged: number;
	const QQuickItem__ItemRotationHasChanged: number;
	const QQuickItem__ItemAntialiasingHasChanged: number;
	const QQuickItem__ItemDevicePixelRatioHasChanged: number;
	const QQuickItem__ItemEnabledHasChanged: number;
	const QQuickItem__TopLeft: number;
	const QQuickItem__Top: number;
	const QQuickItem__TopRight: number;
	const QQuickItem__Left: number;
	const QQuickItem__Center: number;
	const QQuickItem__Right: number;
	const QQuickItem__BottomLeft: number;
	const QQuickItem__Bottom: number;
	const QQuickItem__BottomRight: number;
	const QQuickPaintedItem__Image: number;
	const QQuickPaintedItem__FramebufferObject: number;
	const QQuickPaintedItem__InvertedYFramebufferObject: number;
	const QQuickPaintedItem__FastFBOResizing: number;
	interface QQuickView_ITF extends QQuickWindow_ITF {
		QQuickView_PTR():QQuickView;
	}

	class QQuickView extends QQuickWindow {
		___pointer: number;
		QQuickView_PTR():QQuickView;
		Pointer():number;
		SetPointer(p:number):void;
		Engine():qml.QQmlEngine;
		Errors():qml.QQmlError[];
		ResizeMode():number;
		RootContext():qml.QQmlContext;
		RootObject():QQuickItem;
		SetResizeMode(vqq:number):void;
		ConnectSetSource(f:(url:core.QUrl)=>void):void;
		DisconnectSetSource():void;
		SetSource(url:core.QUrl_ITF):void;
		SetSourceDefault(url:core.QUrl_ITF):void;
		Source():core.QUrl;
		ConnectDestroyQQuickView(f:()=>void):void;
		DisconnectDestroyQQuickView():void;
		DestroyQQuickView():void;
		DestroyQQuickViewDefault():void;
	}
	function NewQQuickViewFromPointer(ptr:number):QQuickView;
	function NewQQuickView(parent:gui.QWindow_ITF):QQuickView;
	function NewQQuickView2(engine:qml.QQmlEngine_ITF,parent:gui.QWindow_ITF):QQuickView;
	function NewQQuickView3(source:core.QUrl_ITF,parent:gui.QWindow_ITF):QQuickView;
	const QQuickView__SizeViewToRootObject: number;
	const QQuickView__SizeRootObjectToView: number;
	const QQuickView__Null: number;
	const QQuickView__Ready: number;
	const QQuickView__Loading: number;
	const QQuickView__Error: number;
	interface QQuickWidget_ITF extends widgets.QWidget_ITF {
		QQuickWidget_PTR():QQuickWidget;
	}

	class QQuickWidget extends widgets.QWidget {
		___pointer: number;
		QQuickWidget_PTR():QQuickWidget;
		Pointer():number;
		SetPointer(p:number):void;
		DragEnterEventDefault(e:gui.QDragEnterEvent_ITF):void;
		DragLeaveEventDefault(e:gui.QDragLeaveEvent_ITF):void;
		DragMoveEventDefault(e:gui.QDragMoveEvent_ITF):void;
		DropEventDefault(e:gui.QDropEvent_ITF):void;
		Engine():qml.QQmlEngine;
		Errors():qml.QQmlError[];
		EventDefault(e:core.QEvent_ITF):boolean;
		Format():gui.QSurfaceFormat;
		MouseMoveEventDefault(e:gui.QMouseEvent_ITF):void;
		MousePressEventDefault(e:gui.QMouseEvent_ITF):void;
		ResizeMode():number;
		RootContext():qml.QQmlContext;
		RootObject():QQuickItem;
		SetFormat(format:gui.QSurfaceFormat_ITF):void;
		SetResizeMode(vqq:number):void;
		ConnectSetSource(f:(url:core.QUrl)=>void):void;
		DisconnectSetSource():void;
		SetSource(url:core.QUrl_ITF):void;
		SetSourceDefault(url:core.QUrl_ITF):void;
		Source():core.QUrl;
		ConnectDestroyQQuickWidget(f:()=>void):void;
		DisconnectDestroyQQuickWidget():void;
		DestroyQQuickWidget():void;
		DestroyQQuickWidgetDefault():void;
		CloseDefault():boolean;
		CloseEventDefault(event:gui.QCloseEvent_ITF):void;
		EnterEventDefault(event:core.QEvent_ITF):void;
		HideDefault():void;
		LeaveEventDefault(event:core.QEvent_ITF):void;
		LowerDefault():void;
		MoveEventDefault(event:gui.QMoveEvent_ITF):void;
		ResizeEventDefault(event:gui.QResizeEvent_ITF):void;
		SetDisabledDefault(disable:boolean):void;
		SetEnabledDefault(vbo:boolean):void;
		SetStyleSheetDefault(styleSheet:string):void;
		SetVisibleDefault(visible:boolean):void;
		SetWindowTitleDefault(vqs:string):void;
		ShowDefault():void;
		UpdateDefault():void;
		ChildEventDefault(event:core.QChildEvent_ITF):void;
		ConnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		CustomEventDefault(event:core.QEvent_ITF):void;
		DeleteLaterDefault():void;
		DisconnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		EventFilterDefault(watched:core.QObject_ITF,event:core.QEvent_ITF):boolean;
		TimerEventDefault(event:core.QTimerEvent_ITF):void;
		PaintEngineDefault():gui.QPaintEngine;
	}
	function NewQQuickWidgetFromPointer(ptr:number):QQuickWidget;
	function NewQQuickWidget(parent:widgets.QWidget_ITF):QQuickWidget;
	function NewQQuickWidget2(engine:qml.QQmlEngine_ITF,parent:widgets.QWidget_ITF):QQuickWidget;
	function NewQQuickWidget3(source:core.QUrl_ITF,parent:widgets.QWidget_ITF):QQuickWidget;
	const QQuickWidget__SizeViewToRootObject: number;
	const QQuickWidget__SizeRootObjectToView: number;
	const QQuickWidget__Null: number;
	const QQuickWidget__Ready: number;
	const QQuickWidget__Loading: number;
	const QQuickWidget__Error: number;
	interface QQuickWindow_ITF extends gui.QWindow_ITF {
		QQuickWindow_PTR():QQuickWindow;
	}

	class QQuickWindow extends gui.QWindow {
		___pointer: number;
		QQuickWindow_PTR():QQuickWindow;
		Pointer():number;
		SetPointer(p:number):void;
		Color():gui.QColor;
		EventDefault(e:core.QEvent_ITF):boolean;
		MouseMoveEventDefault(event:gui.QMouseEvent_ITF):void;
		MousePressEventDefault(event:gui.QMouseEvent_ITF):void;
		ResizeEventDefault(ev:gui.QResizeEvent_ITF):void;
		ConnectUpdate(f:()=>void):void;
		DisconnectUpdate():void;
		Update():void;
		UpdateDefault():void;
		ConnectDestroyQQuickWindow(f:()=>void):void;
		DisconnectDestroyQQuickWindow():void;
		DestroyQQuickWindow():void;
		DestroyQQuickWindowDefault():void;
		CloseDefault():boolean;
		FormatDefault():gui.QSurfaceFormat;
		HideDefault():void;
		LowerDefault():void;
		MoveEventDefault(ev:gui.QMoveEvent_ITF):void;
		SetGeometryDefault(posx:number,posy:number,w:number,h:number):void;
		SetGeometry2Default(rect:core.QRect_ITF):void;
		SetVisibleDefault(visible:boolean):void;
		SetXDefault(arg:number):void;
		SetYDefault(arg:number):void;
		ShowDefault():void;
		SizeDefault():core.QSize;
		ChildEventDefault(event:core.QChildEvent_ITF):void;
		ConnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		CustomEventDefault(event:core.QEvent_ITF):void;
		DeleteLaterDefault():void;
		DisconnectNotifyDefault(sign:core.QMetaMethod_ITF):void;
		EventFilterDefault(watched:core.QObject_ITF,event:core.QEvent_ITF):boolean;
		TimerEventDefault(event:core.QTimerEvent_ITF):void;
		SurfaceTypeDefault():number;
	}
	function NewQQuickWindowFromPointer(ptr:number):QQuickWindow;
	function NewQQuickWindow(parent:gui.QWindow_ITF):QQuickWindow;
	const QQuickWindow__TextureHasAlphaChannel: number;
	const QQuickWindow__TextureHasMipmaps: number;
	const QQuickWindow__TextureOwnsGLTexture: number;
	const QQuickWindow__TextureCanUseAtlas: number;
	const QQuickWindow__TextureIsOpaque: number;
	const QQuickWindow__BeforeSynchronizingStage: number;
	const QQuickWindow__AfterSynchronizingStage: number;
	const QQuickWindow__BeforeRenderingStage: number;
	const QQuickWindow__AfterRenderingStage: number;
	const QQuickWindow__AfterSwapStage: number;
	const QQuickWindow__NoStage: number;
	const QQuickWindow__ContextNotAvailable: number;
	const QQuickWindow__QtTextRendering: number;
	const QQuickWindow__NativeTextRendering: number;
	const QSGAbstractRenderer__ClearColorBuffer: number;
	const QSGAbstractRenderer__ClearDepthBuffer: number;
	const QSGAbstractRenderer__ClearStencilBuffer: number;
	const QSGEngine__TextureHasAlphaChannel: number;
	const QSGEngine__TextureOwnsGLTexture: number;
	const QSGEngine__TextureCanUseAtlas: number;
	const QSGEngine__TextureIsOpaque: number;
	const QSGGeometry__UnknownAttribute: number;
	const QSGGeometry__PositionAttribute: number;
	const QSGGeometry__ColorAttribute: number;
	const QSGGeometry__TexCoordAttribute: number;
	const QSGGeometry__TexCoord1Attribute: number;
	const QSGGeometry__TexCoord2Attribute: number;
	const QSGGeometry__AlwaysUploadPattern: number;
	const QSGGeometry__StreamPattern: number;
	const QSGGeometry__DynamicPattern: number;
	const QSGGeometry__StaticPattern: number;
	const QSGGeometry__DrawPoints: number;
	const QSGGeometry__DrawLines: number;
	const QSGGeometry__DrawLineLoop: number;
	const QSGGeometry__DrawLineStrip: number;
	const QSGGeometry__DrawTriangles: number;
	const QSGGeometry__DrawTriangleStrip: number;
	const QSGGeometry__DrawTriangleFan: number;
	const QSGGeometry__ByteType: number;
	const QSGGeometry__UnsignedByteType: number;
	const QSGGeometry__ShortType: number;
	const QSGGeometry__UnsignedShortType: number;
	const QSGGeometry__IntType: number;
	const QSGGeometry__UnsignedIntType: number;
	const QSGGeometry__FloatType: number;
	const QSGImageNode__NoTransform: number;
	const QSGImageNode__MirrorHorizontally: number;
	const QSGImageNode__MirrorVertically: number;
	const QSGMaterial__Blending: number;
	const QSGMaterial__RequiresDeterminant: number;
	const QSGMaterial__RequiresFullMatrixExceptTranslate: number;
	const QSGMaterial__RequiresFullMatrix: number;
	const QSGMaterial__CustomCompileStep: number;
	const QSGNode__BasicNodeType: number;
	const QSGNode__GeometryNodeType: number;
	const QSGNode__TransformNodeType: number;
	const QSGNode__ClipNodeType: number;
	const QSGNode__OpacityNodeType: number;
	const QSGNode__RootNodeType: number;
	const QSGNode__RenderNodeType: number;
	const QSGNode__OwnedByParent: number;
	const QSGNode__UsePreprocess: number;
	const QSGNode__OwnsGeometry: number;
	const QSGNode__OwnsMaterial: number;
	const QSGNode__OwnsOpaqueMaterial: number;
	const QSGNode__IsVisitableNode: number;
	const QSGNode__InternalReserved: number;
	const QSGNode__DirtySubtreeBlocked: number;
	const QSGNode__DirtyMatrix: number;
	const QSGNode__DirtyNodeAdded: number;
	const QSGNode__DirtyNodeRemoved: number;
	const QSGNode__DirtyGeometry: number;
	const QSGNode__DirtyMaterial: number;
	const QSGNode__DirtyOpacity: number;
	const QSGNode__DirtyForceUpdate: number;
	const QSGNode__DirtyUsePreprocess: number;
	const QSGRenderNode__DepthState: number;
	const QSGRenderNode__StencilState: number;
	const QSGRenderNode__ScissorState: number;
	const QSGRenderNode__ColorState: number;
	const QSGRenderNode__BlendState: number;
	const QSGRenderNode__CullState: number;
	const QSGRenderNode__ViewportState: number;
	const QSGRenderNode__RenderTargetState: number;
	const QSGRenderNode__BoundedRectRendering: number;
	const QSGRenderNode__DepthAwareRendering: number;
	const QSGRenderNode__OpaqueRendering: number;
	const QSGRendererInterface__Unknown: number;
	const QSGRendererInterface__Software: number;
	const QSGRendererInterface__OpenGL: number;
	const QSGRendererInterface__Direct3D12: number;
	const QSGRendererInterface__OpenVG: number;
	const QSGRendererInterface__DeviceResource: number;
	const QSGRendererInterface__CommandQueueResource: number;
	const QSGRendererInterface__CommandListResource: number;
	const QSGRendererInterface__PainterResource: number;
	const QSGRendererInterface__UnknownShadingLanguage: number;
	const QSGRendererInterface__GLSL: number;
	const QSGRendererInterface__HLSL: number;
	const QSGRendererInterface__RuntimeCompilation: number;
	const QSGRendererInterface__OfflineCompilation: number;
	const QSGRendererInterface__ShaderSourceString: number;
	const QSGRendererInterface__ShaderSourceFile: number;
	const QSGRendererInterface__ShaderByteCode: number;
	const QSGSimpleTextureNode__NoTransform: number;
	const QSGSimpleTextureNode__MirrorHorizontally: number;
	const QSGSimpleTextureNode__MirrorVertically: number;
	const QSGTexture__Repeat: number;
	const QSGTexture__ClampToEdge: number;
	const QSGTexture__MirroredRepeat: number;
	const QSGTexture__None: number;
	const QSGTexture__Nearest: number;
	const QSGTexture__Linear: number;
	const QSGTexture__AnisotropyNone: number;
	const QSGTexture__Anisotropy2x: number;
	const QSGTexture__Anisotropy4x: number;
	const QSGTexture__Anisotropy8x: number;
	const QSGTexture__Anisotropy16x: number;
}